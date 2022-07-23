import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

function CreateNewPet({ addPet }) {
  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [urlImage, setUrlImage] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();
    if (
      name.length > 0 &&
      lat.length > 0 &&
      lng.length > 0 &&
      urlImage.length > 0
    ) {
      addPet({ name, lat, lng, urlImage });
      setName("");
      setLat("");
      setLng("");
      setUrlImage("");
    }
  };

  return (
    <Paper elevation={3} sx={{ minWidth: "300px" }}>
      <Box p={2} display="flex" flexDirection="column" gap={2}>
        <Typography variant="h5" fontWeight="bold">
          Create New Pet
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
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Latitude"
            variant="outlined"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
          <TextField
            fullWidth
            label="Longitude"
            variant="outlined"
            value={lng}
            onChange={(e) => setLng(e.target.value)}
          />
          <TextField
            fullWidth
            label="Url Image"
            variant="outlined"
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
          />
          <Button fullWidth variant="contained" type="submit">
            Add Pet
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default CreateNewPet;
