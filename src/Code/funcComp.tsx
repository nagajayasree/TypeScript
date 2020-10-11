import React from "react";

interface Values {
  msg?: string;
  name?: string;
}
type Props = { Name: string };
const GetName = ({ Name }: Props) => <div>{Name}</div>;

const Msg = ({ msg }: Values) => <div>{msg}</div>;

const Name = ({ name }: Values) => <div>{name}</div>;

const GetLastName: React.FunctionComponent<{ lastName: string }> = ({
  lastName,
}) => <div>{lastName}</div>;

const Title: React.FC<{ title: string }> = ({ children, title }) => (
  <div title={title}>
    <div>{title}</div>
    {children}
  </div>
);

export { Msg, Name, GetName, GetLastName, Title };
