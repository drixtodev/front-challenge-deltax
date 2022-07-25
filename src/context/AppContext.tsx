import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import { API_KEY_GOOGLE_MAPS } from 'config';
import { Pet } from 'Pets/types';

export const AppContext = createContext<{
	isLoadedGoogleMaps?: boolean;
	selectedPet?: Pet | undefined;
	setSelectedPet?: (pet: Pet | undefined) => void;
}>({});

export const AppProvider = ({ children }: { children: ReactNode }) => {
	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: API_KEY_GOOGLE_MAPS as string,
	});
	const [selectedPet, setSelectedPet] = useState<Pet | undefined>(undefined);

	useEffect(() => {
		console.log(isLoaded);
	}, [isLoaded]);

	return (
		<AppContext.Provider value={{ isLoadedGoogleMaps: isLoaded, selectedPet, setSelectedPet }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
