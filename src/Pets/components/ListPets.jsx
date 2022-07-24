import { Grid } from "@mui/material";
import { usePets } from "../hooks/usePets";
import Pet from "./Pet";

const ListPets = () => {
  const { pets } = usePets();

  return (
    <Grid container spacing={2}>
      {pets.map((pet) => (
        <Grid item key={pet._id} xs={12} sm={6} lg={4} xl={3}>
          <Pet {...pet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListPets;
