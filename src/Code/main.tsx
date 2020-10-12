import * as React from "react";
import { GetLastName, GetName, Msg, Name, Title } from "./funcComp";
import Comp from "./stateComp";
import {Greet,Wish,Play,Activity} from "./defProps";

const Main = () => (
  <div>
    <Msg msg="Helllooooo" />
    <Name name="ts" />
    <GetName Name="jay" />
    <GetLastName lastName="ramaka" />
    <Title title="Learn typescript with react">Hello typescript</Title>
    <Comp name="hari" />
    <Greet />
    <Wish />
    <Play />
    <Activity work={"jump"} />
  </div>
);

export default Main;
