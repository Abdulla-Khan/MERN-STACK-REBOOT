import { Box, Button } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import axios from "axios";
import { useState } from "react";
import BaGrid from "./components/BAGrid";
import { useNavigate } from "react-router-dom";

function ApiHandlingScreen() {
  const navigate = useNavigate();

  const [userList, setUserList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const getApiData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setLoading(true);

        console.log(response.data);
        setUserList([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };
  const postApiData = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        userId: "10",
        title: "Custom Title",
        completed: false,
      })
      .then((response) => {
        console.log(response);
        // getApiData()
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const putApiData = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/2", {
        userId: 1,
        // id: 1,
        title: "Custom Title",
        body: "Custom Body",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deleteApiData = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/2")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="primary"
        onClick={getApiData}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        Get Data
      </Button>
      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="primary"
        onClick={postApiData}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        Post Data
      </Button>

      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="primary"
        onClick={() => navigate("/")}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        Home
      </Button>
      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="primary"
        onClick={() => navigate("/about")}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        About
      </Button>

      <BaGrid data={userList} loading={loading} />
    </Box>
  );
}

export default ApiHandlingScreen;
