import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AskQuestion() {
  const navigate = useNavigate();

  let [count, setCount] = useState("");
  let [textList, setTextInput] = useState<any>([]);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          navigate("/", { state: { textList } });
        }}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        All Question
      </Button>
      <input
        type="text"
        onChange={(event) => {
          setCount(event.target.value);
        }}
      />
      <button
        onClick={() => {
          textList.push(count);
          setTextInput([...textList]);
          setCount("");
          console.log(textList);
        }}
      >
        Add Question{" "}
      </button>
    </div>
  );
}
