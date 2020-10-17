import * as React from "react";

interface PersonContextInterface {
  name: string;
  age: number;
  id: number;
}

const PersonContext = React.createContext<PersonContextInterface | null>(null);

const samplePersonContext: PersonContextInterface = {
  name: "vbejvnk",
  age: 56,
  id: 64755,
};

export const Person = () => (
  <PersonContext.Provider value={samplePersonContext}>
    <PersonInfo/>
  </PersonContext.Provider>
);


export default PersonContext;
