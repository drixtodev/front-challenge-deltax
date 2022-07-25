import { Grid } from '@mui/material';
import { usePets } from 'Pets/hooks';
import PetCardItem from 'Pets/components/PetCardItem';

export default function ListPets() {
	const { pets } = usePets();

	return (
		<Grid container spacing={2}>
			{pets.map(pet => (
				<Grid item key={pet._id} xs={12} sm={6} lg={4} xl={3}>
					<PetCardItem {...pet} />
				</Grid>
			))}
		</Grid>
	);
}
