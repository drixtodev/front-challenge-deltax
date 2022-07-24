import { ApiLostPets } from "../../lib/axios";

export async function createPet(data) {
  return ApiLostPets.post("/pets", data).then((response) => response.data);
}
