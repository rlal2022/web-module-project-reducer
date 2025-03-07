import React, { useReducer } from "react";
import reducer, { initialState } from "../reducers/index";
import {
  applyNumber,
  changeOperator,
  clearCalc,
  memoryPlus,
  memoryClear,
  MR,
} from "../actions";
import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);
  console.log(dispatch);

  const handleNumber = (num) => {
    dispatch(applyNumber(parseInt(num)));
  };

  const handleOperator = (operator) => {
    dispatch(changeOperator(operator));
  };

  const handleClear = (clear) => {
    dispatch(clearCalc(clear));
  };

  const handleMemoryPlus = (memory) => {
    dispatch(memoryPlus(memory));
  };

  const handleMR = (memory) => {
    dispatch(MR(memory));
  };

  const handleMemoryClear = (memory) => {
    dispatch(memoryClear(memory));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={() => handleMemoryPlus()} />
              <CalcButton value={"MR"} onClick={() => handleMR()} />
              <CalcButton value={"MC"} onClick={() => handleMemoryClear()} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumber("1")} />
              <CalcButton value={2} onClick={() => handleNumber("2")} />
              <CalcButton value={3} onClick={() => handleNumber("3")} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumber("4")} />
              <CalcButton value={5} onClick={() => handleNumber("5")} />
              <CalcButton value={6} onClick={() => handleNumber("6")} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumber("7")} />
              <CalcButton value={8} onClick={() => handleNumber("8")} />
              <CalcButton value={9} onClick={() => handleNumber("9")} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperator("+")} />
              <CalcButton value={"*"} onClick={() => handleOperator("*")} />
              <CalcButton value={"-"} onClick={() => handleOperator("-")} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClear()} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
