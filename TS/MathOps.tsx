import * as React from "react";

export interface MathOpsProps {
  operation: string;
}

export interface MathOpsState {
  a: number;
  b: number;
}

class MathOps extends React.Component<MathOpsProps, MathOpsState> {
  constructor(props: MathOpsProps) {
    super(props);
    this.state = { a: 12, b: 1 };
  }
  render() {
    return (
      <>
        {this.props.operation === "add"
          ? this.state.a + this.state.b
          : this.props.operation === "sub"
          ? this.state.a - this.state.b
          : "This operation is not supported"}
      </>
    );
  }
}

export default MathOps;
