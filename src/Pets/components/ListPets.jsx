import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedPet, selectOnePet } from "../../store/slices/petSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Map = ({ lat, lng }) => {
  const dispatch = useDispatch();
  const center = {
    lat: parseFloat(lat),
    lng: parseFloat(lng),
  };
  const selected = useState(center || { lat: -34.397, lng: 150.644 });

  return (
    <Modal
      open={true}
      onClose={() => dispatch(removeSelectedPet())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box bgcolor="#fff" p={3}>
          <GoogleMap
            mapContainerStyle={{ width: "800px", height: "800px" }}
            center={center}
            zoom={10}
          >
            {selected && <Marker position={selected} />}
          </GoogleMap>
        </Box>
      </Box>
    </Modal>
  );
};

const CardPet = (data) => {
  const dispatch = useDispatch();
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.urlImage}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Was found at
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Latitude: {data.lat}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Longitude: {data.lng}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => dispatch(selectOnePet(data._id))}
        >
          View in map
        </Button>
      </CardActions>
    </Card>
  );
};

const ListPets = ({ pets = [] }) => {
  const find = useSelector((state) => state.pets.selectedPet);

  return (
    <>
      {find._id && <Map lat={find.lat} lng={find.lng} />}
      {pets.map((pet) => (
        <CardPet key={pet._id} {...pet} />
      ))}
    </>
  );
};

export default ListPets;
