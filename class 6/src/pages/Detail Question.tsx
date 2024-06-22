import { Box, Typography } from "@mui/material";
import BAFooter from "../layout/BAFooter";
import BAHeader from "../layout/BAHeader";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

export default function DetailQuestion() {
  return (
    <>
      <BAHeader />
      <Box className=" container p-3">
        <h1>
          <QuestionMarkIcon />
        </h1>
        <Typography className="fs-1">What is the Capital of India</Typography>
      </Box>
      <BAFooter />
    </>
  );
}
