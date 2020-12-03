import React from "react";
import "./App.css";
import Message from "./TS/Message";
import { Rating, Result, Ticketing, Tickets } from "./TS/Ticketing";
import Welcome, { WelcomeMessage, WelcomeUser } from "./TS/Welcome";
import { PersonDetails, Users } from "./TS/Lists";
import { InputField2, Text } from "./TS/InputField";
import Player, { DisplayMsg, Greet, GetMsg } from "./TS/ClassComps";
import { MathOps, Add } from "./TS/MathOps";

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
      <Player name="John" />
      <MathOps operation="sub" />
      <Add c={6} />
    </div>
  );
}

export default App;
