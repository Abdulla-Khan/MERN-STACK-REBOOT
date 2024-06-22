// import { Link } from "react-router-dom";s

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import Button from "@mui/material/Button";

import { useLocation, useNavigate } from "react-router-dom";
import BAHeader from "../layout/BAHeader";
import BAFooter from "../layout/BAFooter";
import { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { getData } from "../config/firebaseMethods";

function AllQuestions() {
  const getQuestions = () => {
    getData("questions");
  };
  useEffect(() => {
    getQuestions();
  });
  const navigate = useNavigate();
  // const state = useLocation();
  // const textList = state.state.textList;
  return (
    <>
      <BAHeader />
      {/* <Box className="container p-3">
        {allQuestions &&
          Array.isArray(allQuestions) &&
          allQuestions.length > 0 &&
          allQuestions.map((item: any, index: number) => {
            return (
              <Paper
                onClick={() => {
                  navigate("/ask/1");
                }}
                className="p-2 m-1"
              >
                <Typography className="fs-4 fw-bold">
                  {item.question}
                </Typography>
                <Box>
                  <Box>Answers: 786</Box>
                </Box>
              </Paper>
            );
          })}
      </Box> */}
      <BAFooter />
      {/* <div>
        <h1>All Question</h1>
        <Button
          variant="contained"
          startIcon={<AssignmentTurnedInIcon />}
          color="primary"
          onClick={() => {
            navigate("/ask");
          }}
          sx={{ margin: 1, textTransform: "capitalize" }}
        >
          Ask Question
        </Button>
        {textList.map((item: any, index: number) => {
          return (
            <h1 key={index}>
              {index + 1}. {item}
            </h1>
          );
        })}
      </div> */}
    </>
  );
}
export default AllQuestions;
