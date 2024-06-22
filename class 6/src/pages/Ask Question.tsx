// import { Link } from "react-router-dom";s

import { Box } from "@mui/material";
// import AskQuestion from "../components/BAQuestion";
import BAFooter from "../layout/BAFooter";
import BAHeader from "../layout/BAHeader";
import BATextArea from "../components/BATextInput";
import { useState } from "react";
import { sendData } from "../config/firebaseMethods";
import BAButton from "../components/BAButton";

function AskQuestions() {
  const [question, setQuestion] = useState<any>();

  const addData = () => {
    let obj = {
      question: question,
      createdAt: JSON.stringify(new Date()),
    };

    sendData("questions", obj);
  };

  return (
    <>
      <BAHeader />
      <br />
      <Box className="container p3">
        <BATextArea
          value={question}
          onChange={(event: any) => {
            setQuestion(event.target.value);
          }}
          label="Ask Question"
        />
      </Box>
      <br />

      <BAButton label="Add Question" onClick={addData} />

      <br />
      <BAFooter />
      {/* <div>
        <h1>Ask Question</h1>
        <AskQuestion />
      </div> */}
    </>
  );
}
export default AskQuestions;
