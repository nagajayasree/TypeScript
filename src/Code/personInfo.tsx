import * as React from "react";
import PersonContext from "./context";

const PersonInfo = () => {
  const prsnContext = React.useContext(PersonContext);
  return (
    <div>
      Name:{prsnContext?.name},Age:{prsnContext?.age},Id:{prsnContext?.id}
    </div>
  );
};

export default PersonInfo;
