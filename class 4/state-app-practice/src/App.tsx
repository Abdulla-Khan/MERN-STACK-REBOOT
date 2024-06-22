import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState("");
  let [textList, setTextInput] = useState<any>([]);

  return (
    <div className="App">
      <h1>
        Todo Using <code> useState</code>
      </h1>

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
          }}
        >
        Add Value{" "}
      </button>
      <button
        onClick={() => {
          setTextInput([]);
        }}
      >
        Delete All{" "}
      </button>
      <br />
      {textList.map((item: any, index: number) => {
        return (
          <h1 key={index}>
            {index + 1}. {item}
            <button
              onClick={() => {
                textList.splice(index, 1);
                setTextInput([...textList]);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                textList[index] = prompt("Edit Value", item);
                console.log(textList[index]);
                setTextInput([...textList]);
              }}
            >
              Edit
            </button>
          </h1>
        );
      })}
    </div>
  );
}

export default App;
