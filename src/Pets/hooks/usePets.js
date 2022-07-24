import axios from "axios";
import useSWR, { mutate } from "swr";
import { API_PETS_URL } from "../../config";
import { generateRandomUUID } from "../../lib/uuid";
import { createPet } from "../repositories/PetsReposity";

const fetcher = (url) => axios(url).then((res) => res.data.pets);

export const usePets = () => {
  const { data } = useSWR(API_PETS_URL, fetcher);

  const addPet = (pet) => {
    const newPet = { ...pet, _id: generateRandomUUID() };
    const optimisticData = [...(data || []), newPet];
    mutate(
      API_PETS_URL,
      createPet(pet).then(() => mutate(API_PETS_URL)),
      {
        optimisticData,
        rollbackOnError: true,
      }
    );
  };

  return {
    pets: data || [],
    addPet,
  };
};
