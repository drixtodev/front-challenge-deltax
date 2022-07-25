import axios from 'axios';
import { URL_API_LOST_PETS } from 'config';

const ApiLostPetsInstance = axios.create({
	baseURL: URL_API_LOST_PETS,
});

export const ApiLostPets = ApiLostPetsInstance;
