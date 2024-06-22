import { Box, Typography } from "@mui/material";
import BAButton from "../components/BAButton";
import { useNavigate } from "react-router-dom";

export default function BAHeader() {
  const navigate = useNavigate();
  return (
    <Box className="bg-dark text-white">
      <Box className="container py-5 d-flex justify-content-between align-items-center">
        <Typography className="fs-1">Header</Typography>
        <BAButton
          label="Ask Question"
          onClick={() => {
            navigate("/ask");
          }}
        />
      </Box>
    </Box>
  );
}
