import { ApiLostPets } from 'lib/axios';
import { IFormAddPet, IGetPetsDTO, IPostPetDTO, Pet } from 'Pets/types';

export async function getPets(): Promise<Pet[]> {
	return ApiLostPets.get<IGetPetsDTO>('/pets').then(response => response.data);
}

export async function createPet(newPet: IFormAddPet): Promise<Pet> {
	return ApiLostPets.post<IPostPetDTO>('/pets', newPet).then(response => response.data);
}
