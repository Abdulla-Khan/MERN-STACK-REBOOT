import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Router from "./config/App Router";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        backgroundColor: "#e3d5ca",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <Router />;
    </Box>
  );
}

export default App;
