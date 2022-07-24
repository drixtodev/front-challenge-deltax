import axios from "axios";

const ApiLostPetsInstance = axios.create({
  baseURL: "https://api-challenge-deltax-production.up.railway.app/api/v1",
});

export const fetcherLostPetsApi = (url) =>
  ApiLostPetsInstance.get(url)
    .then((res) => res.data)
    .catch((err) => err);

export const ApiLostPets = ApiLostPetsInstance;
