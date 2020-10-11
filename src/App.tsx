import React from "react";
import "./App.css";
import { GetLastName, GetName, Msg, Name, Title } from "./Code/funcComp";

function App() {
  return (
    <div className="App">
      <Msg msg="Helllooooo" />
      <Name name="ts" />
      <GetName Name="jay" />
      <GetLastName lastName="ramaka" />
      <Title title="Learn typescript with react">Hello typescript</Title>
    </div>
  );
}

export default App;
