import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useAppContext } from 'context/AppContext';
import { Pet } from 'Pets/types';

export default function PetCardItem(pet: Pet) {
	const { setSelectedPet } = useAppContext();

	return (
		<Card>
			<CardMedia component='img' height='180' image={pet.urlImage} alt='green iguana' />
			<CardContent>
				<Typography gutterBottom variant='h5' sx={{ textTransform: 'uppercase' }}>
					{pet.name}
				</Typography>
				<Typography gutterBottom variant='body1'>
					{pet.description}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					Was found in {pet.address}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					fullWidth
					variant='outlined'
					color='secondary'
					onClick={() => setSelectedPet?.(pet)}>
					View location on map
				</Button>
			</CardActions>
		</Card>
	);
}
