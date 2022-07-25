/* eslint-disable no-unneeded-ternary */
import { useCallback, useState, useEffect } from 'react';
import { Dialog, DialogContent, Grid, Typography } from '@mui/material';
import { IFormAddPet } from 'Pets/types';
import FormCreatePet from 'Pets/components/FormCreatePet';
import ListPets from 'Pets/components/ListPets';
import { usePets } from 'Pets/hooks';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useAppContext } from 'context/AppContext';

function Pets() {
	const { isLoadedGoogleMaps, selectedPet, setSelectedPet } = useAppContext();
	const { addNewPet } = usePets();

	const HandleSubmit = useCallback(
		(pet: IFormAddPet) => {
			addNewPet(pet);
		},
		[addNewPet]
	);

	return (
		<Grid container spacing={2} paddingY={10} margin={0}>
			<Grid item xs={12} sm={5} lg={4} xl={3}>
				<FormCreatePet onSubmit={HandleSubmit} />
			</Grid>
			<Grid item xs={12} sm={7} lg={8} xl={9}>
				<ListPets />
			</Grid>
			<Dialog
				fullWidth
				maxWidth='sm'
				open={selectedPet ? true : false}
				onClose={() => setSelectedPet?.(undefined)}>
				<DialogContent>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<Typography variant='h6'>{selectedPet?.name}</Typography>
						</Grid>
						<Grid item xs={12}>
							{isLoadedGoogleMaps && selectedPet?.location.latitude && (
								<GoogleMap
									mapContainerStyle={{ width: '100%', height: 600 }}
									center={{
										lat: Number(selectedPet?.location?.latitude),
										lng: Number(selectedPet?.location?.longitude),
									}}
									zoom={15}>
									{selectedPet && (
										<Marker
											position={{
												lat: Number(selectedPet?.location?.latitude),
												lng: Number(selectedPet?.location?.longitude),
											}}
										/>
									)}
								</GoogleMap>
							)}
						</Grid>
					</Grid>
				</DialogContent>
			</Dialog>
		</Grid>
	);
}

export default Pets;
