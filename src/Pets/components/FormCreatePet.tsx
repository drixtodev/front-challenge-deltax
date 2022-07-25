import React, { useState, FormEvent } from 'react';
import { Box, Button, Divider, Paper, TextField, Typography } from '@mui/material';
import { IFormAddPet } from 'Pets/types';

const initialFormAddPet: IFormAddPet = {
	name: '',
	description: '',
	urlImage: '',
	address: '',
	location: {
		latitude: '',
		longitude: '',
	},
};

function FormCreatePet({ onSubmit }: { onSubmit: (formData: IFormAddPet) => void }) {
	const [formAddPet, setFormAddPet] = useState<IFormAddPet>(initialFormAddPet);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		onSubmit(formAddPet);
		setFormAddPet(initialFormAddPet);
	};

	return (
		<Paper>
			<Box p={2} display='flex' flexDirection='column' gap={2}>
				<Typography variant='h5' fontWeight='bold'>
					Add a new pet
				</Typography>
				<Box display='flex' flexDirection='column' gap={2} component='form' onSubmit={handleSubmit}>
					<TextField
						fullWidth
						label='Name'
						variant='filled'
						value={formAddPet.name}
						onChange={e => setFormAddPet({ ...formAddPet, name: e.target.value })}
					/>
					<TextField
						multiline
						fullWidth
						label='Description'
						variant='filled'
						rows={4}
						value={formAddPet.description}
						onChange={e => setFormAddPet({ ...formAddPet, description: e.target.value })}
					/>
					<TextField
						fullWidth
						label='Url Image'
						variant='filled'
						value={formAddPet.urlImage}
						onChange={e => setFormAddPet({ ...formAddPet, urlImage: e.target.value })}
					/>
					<TextField
						fullWidth
						label='Address'
						variant='filled'
						value={formAddPet.address}
						onChange={e => setFormAddPet({ ...formAddPet, address: e.target.value })}
					/>
					<Divider />
					<Box>
						<Typography gutterBottom variant='body1' color='GrayText'>
							Location on map
						</Typography>
						<Box display='flex' gap={2}>
							<TextField
								fullWidth
								label='Latitude'
								variant='filled'
								value={formAddPet.location.latitude}
								onChange={e =>
									setFormAddPet({
										...formAddPet,
										location: { ...formAddPet.location, latitude: e.target.value },
									})
								}
							/>
							<TextField
								fullWidth
								label='Longitude'
								variant='filled'
								value={formAddPet.location.longitude}
								onChange={e =>
									setFormAddPet({
										...formAddPet,
										location: { ...formAddPet.location, longitude: e.target.value },
									})
								}
							/>
						</Box>
					</Box>
					<Divider />
					<Button type='submit' variant='contained'>
						Submit
					</Button>
				</Box>
			</Box>
		</Paper>
	);
}

export default React.memo(FormCreatePet);
