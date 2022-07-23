import { Box, Stack } from "@mui/material";
import { LoadScript } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import CreateNewPet from "./Pets/components/CreateNewPet";
import ListPets from "./Pets/components/ListPets";
import { createPet } from "./store/slices/petSlice";

function App() {
  const { pets } = useSelector((state) => state.pets);
  const dispatch = useDispatch();

  return (
    <LoadScript googleMapsApiKey="AIzaSyD--gFqev7Yh352ua3cC8DTjNl3W8eJaaw">
      <Box p={10}>
        <Stack direction="row" spacing={4}>
          <CreateNewPet addPet={(data) => dispatch(createPet(data))} />
          <ListPets pets={pets} />
        </Stack>
      </Box>
    </LoadScript>
  );
}

export default App;
