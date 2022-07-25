export type Pet = {
	_id: string;
	name: string;
	description: string;
	urlImage: string;
	address: string;
	location: {
		latitude: string;
		longitude: string;
	};
};

export interface IFormAddPet extends Omit<Pet, '_id'> {}

export type IGetPetsDTO = Pet[];

export type IPostPetDTO = Pet;
