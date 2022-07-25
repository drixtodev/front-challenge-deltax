import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';

export default function Page({ children }: { children: ReactNode }) {
	return (
		<Box minHeight='100vh'>
			<AppBar position='fixed' color='secondary'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						Lost Pets
					</Typography>
					<Button component={Link} color='inherit' to='/pets'>
						Pets
					</Button>
				</Toolbar>
			</AppBar>
			<Container component='main' maxWidth='xl'>
				{children}
			</Container>
		</Box>
	);
}
