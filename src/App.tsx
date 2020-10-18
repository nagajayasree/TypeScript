import React from "react";
import "./App.css";
import Main from "./Code/main";
import Counter from "./Code/Counter/tsxCounter";
import HookCounter from "./Code/Counter/useState";
import ReducerCounter from "./Code/Counter/useReducer";
import Event from "./Code/events";
import { Person } from "./Code/context";
import UseEffectComp from "./Code/useEffect";
import UseRefFComp from "./Code/useRef1";
import UseRefCComp from "./Code/useRef2";

function App() {
  return (
    <div className="App">
      <Main />
      <Counter name={"TS Counter"} />
      <HookCounter />
      <ReducerCounter />
      <Event title={"Name Changer"} />
      <Person />
      <UseEffectComp />
      <UseRefFComp />
      <UseRefCComp head={"UseRef in Class Comp"} />
    </div>
  );
}

export default App;
