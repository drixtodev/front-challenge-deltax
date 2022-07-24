import axios from "axios";

export async function createPet(data) {
  return axios
    .post(
      "https://api-challenge-deltax-production.up.railway.app/api/v1/pets",
      data
    )
    .then((response) => response.data);
}
