import { Grid, CardMedia, Typography, Box } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [loading, setLoading] = useState(false);
  const param = useParams();

  const [userList, setUserList] = useState<any>();
  useEffect(() => {
    getApiData();
  }, []);
  const getApiData = () => {
    axios
      .get("https://fakestoreapi.com/products/" + param.id)
      .then((response) => {
        setLoading(true);

        console.log(response.data);
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <>
      {/* <Button onClick={getApiData}>HGEmmlo</Button> */}
      {!loading ? (
        <h1>Loading</h1>
      ) : (
        <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="50vh"
            >
              <Typography gutterBottom variant="h5" component="div">
                {userList.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userList.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {userList.category}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              image={userList.image}
              title={userList.title}
              sx={{ height: "50vh", objectFit: "contain" }}
            />
          </Grid>
        </Grid>
        </Box>
      )}
      ;
    </>
  );
}
export default SingleProduct;
