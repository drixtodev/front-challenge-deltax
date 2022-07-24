import "./index.css";
import ReactDOM from "react-dom/client";
import { Grid } from "@mui/material";
import { StrictMode } from "react";
import Page from "./components/Page";
import ListPets from "./Pets/components/ListPets";
import AddPet from "./Pets/components/AddPet";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  return (
    <Page>
      <Grid container spacing={2} paddingY={10} margin={0}>
        <Grid item xs={12} sm={5} lg={4} xl={3}>
          <AddPet />
        </Grid>
        <Grid item xs={12} sm={7} lg={8} xl={9}>
          <ListPets />
        </Grid>
      </Grid>
    </Page>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
