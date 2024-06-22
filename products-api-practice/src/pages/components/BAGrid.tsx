import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
type propsType = {
  data: any;
  loading: boolean;
};
export default function MediaCard(props: propsType) {
  const { data, loading } = props;

  const navigate = useNavigate();
  return !loading ? (
    <h1>Loading</h1>
  ) : (
    <Grid container direction="row" spacing={2}>
      {data.map((i: any) => (
        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: "60vh", objectFit: "cover" }}
              image={i.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {i.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {i.category}
              </Typography>
              <Button
                onClick={() => {
                  navigate("/products/" + i.id);
                }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
