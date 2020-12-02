import React from "react";
import "./App.css";
import Welcome, { WelcomeMessage, WelcomeUser } from "./TS/Welcome";

function App() {
  return (
    <div className="App">
      <h1>TypeScript</h1>
      <Welcome message="Welcome to TypeScript!" />
      <WelcomeUser user="js" />
      <WelcomeMessage firstName="FirstName" />
      <PersonDetails persons={[{ id: 1, name: "kjdsp" }]} />
      <Text text="hello" />
      <InputField2 msg="inputfield2" />
      <DisplayMsg greet={"Greet"} />
      <Greet msg={"Message"} />
      <GetMsg msg={"Msg"} />
    </div>
  );
}

export default App;
