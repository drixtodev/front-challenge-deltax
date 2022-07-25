import useSWR, { Key } from 'swr';
import { generateRandomUUID } from 'lib/uuid';
import { IFormAddPet, Pet } from 'Pets/types';
import { createPet, getPets } from 'Pets/repository';
import { useState } from 'react';

const uid: Key = '<pets>';
const fetcher = () => getPets();

export const usePets = () => {
	const { data, mutate } = useSWR<Pet[]>(uid, fetcher);

	const addNewPet = (newPet: IFormAddPet) =>
		mutate(
			createPet(newPet).then(() => [...(data ?? []), { ...newPet, _id: generateRandomUUID() }])
		);

	return {
		pets: data ?? [],
		addNewPet,
	};
};
