import * as React from "react";

export interface MyProps {
  name: string;
}

export interface MyState {
  count: number;
}

class Comp extends React.Component<MyProps, MyState> {
  state: MyState = { count: 0 };
  render() {
    return (
      <div>
        {this.props.name} {this.state.count}
      </div>
    );
  }
}

export default Comp;
