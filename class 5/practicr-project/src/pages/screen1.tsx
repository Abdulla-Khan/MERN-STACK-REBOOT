import Button from "../components/buttons";
import "../App.css";
import { useState } from "react";
function Screen1() {
  var questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];
  const [score, setScore] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div>
      <h1>Quiz App</h1>
      <hr />
      <p>
        Question {currentQuestion + 1}/{questions.length}:{" "}
        {questions[currentQuestion].question}
      </p>
      <div
        style={{
          margin: "10px auto",

          width: "20%",
        }}
      >
        {questions[currentQuestion].options.map((option, index) => {
          return (
            <div
              style={{
                margin: "10px",
                textAlign: "left",
                // backgroundColor: "lightgray",
              }}
            >
              <input
                style={{
                  margin: "10px",
                }}
                type="radio"
                key={index}
                name={questions[currentQuestion].question}
                value={option}
              />
              {option}
            </div>
          );
        })}
      </div>
      <Button
        onClick={() => {
          const selectedOption = document.querySelector(
            `input[name='${questions[currentQuestion].question}']:checked`
          ) as HTMLInputElement;

          if (selectedOption?.value === questions[currentQuestion].correctAns) {
            setScore(score + 1);
            selectedOption.checked = false;
            if (currentQuestion === questions.length - 1) {
              setScore(0);

              setCurrentQuestion(0);
            } else {
              setCurrentQuestion(currentQuestion + 1);
            }
          } else {
            console.log(currentQuestion);
            setCurrentQuestion(score + 1);

            if (currentQuestion === questions.length - 1) {
              alert("Quiz Completed");
              setScore(0);

              setCurrentQuestion(0);
            }
          }
        }}
        buttonValue="Submit"
        className="btn btn-danger "
      />

      <h1> Your Score {score}</h1>
    </div>
  );
}

export default Screen1;
