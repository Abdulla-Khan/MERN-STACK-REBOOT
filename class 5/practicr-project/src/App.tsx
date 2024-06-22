import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Screen1 from "./pages/screen1";

function App() {
  return (
    <div className="App">
      <Screen1 />
    </div>
    //  {
    /*       
         
          <span>
            <br />
            <br />
            <InputFeild
              name={buttonList + ": "}
              onChange={(event: any) => {
                inputList = event.target.value;
              }}
            />
            <Button

              buttonValue={buttonList}
              className="btn btn-primary "
              onClick={() => {
                inputList.length === 0
                  ? alert("Please Enter a Value")
                  : alert(`Button Says ${inputList} `);
              }}
            />
            <br />
          </span>
        */
    // }
    // </div>
  );
}

export default App;
