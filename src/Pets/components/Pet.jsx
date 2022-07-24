import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Pet = (data) => {
  return (
    <Card>
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
        <Button variant="contained">View in map</Button>
      </CardActions>
    </Card>
  );
};

export default Pet;
