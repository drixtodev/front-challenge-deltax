import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { usePets } from "../hooks/usePets";
import { defaultLostPet } from "../pet";

const AddPet = () => {
  const { addPet } = usePets();
  const [pet, setPet] = useState(defaultLostPet);

  const HandleSubmit = (event) => {
    event.preventDefault();
    addPet(pet)
      .then(() => setPet(defaultLostPet))
      .catch(() => {
        setPet(pet);
      });
  };

  return (
    <Paper>
      <Box p={2} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          Add Pet
        </Typography>
        <Box
          component="form"
          onSubmit={HandleSubmit}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <TextField
            fullWidth
            label="Name Pet"
            variant="outlined"
            value={pet.name}
            onChange={(e) => setPet({ ...pet, name: e.target.value })}
          />
          <TextField
            fullWidth
            label="Location Latitude"
            variant="outlined"
            value={pet.lat}
            onChange={(e) => setPet({ ...pet, lat: e.target.value })}
          />
          <TextField
            fullWidth
            label="Location Longitude"
            variant="outlined"
            value={pet.lng}
            onChange={(e) => setPet({ ...pet, lng: e.target.value })}
          />
          <TextField
            fullWidth
            label="Image URL"
            variant="outlined"
            value={pet.urlImage}
            onChange={(e) => setPet({ ...pet, urlImage: e.target.value })}
          />
          <Button fullWidth variant="contained" type="submit">
            Add Pet
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default AddPet;
