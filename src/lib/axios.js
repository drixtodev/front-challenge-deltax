import axios from "axios";
import { URL_API_LOST_PETS } from "../config";

const ApiLostPetsInstance = axios.create({
  baseURL: URL_API_LOST_PETS,
});

export const fetcherLostPetsApi = (url) =>
  ApiLostPetsInstance.get(url)
    .then((res) => res.data)
    .catch((err) => err);

export const ApiLostPets = ApiLostPetsInstance;
