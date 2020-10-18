import * as React from "react";

export interface UseRefCCompProps {
  head: string;
}

export interface UseRefCCompState {
  name: string;
}

class UseRefCComp extends React.Component<UseRefCCompProps, UseRefCCompState> {
  inputRef = React.createRef<HTMLInputElement>();
  constructor(props: UseRefCCompProps) {
    super(props);
    this.state = { name: "js" };
  }

  onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    this.setState({ name: e.currentTarget.value });
  };

  //   onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //     this.setState({ count: e.currentTarget.value });
  //   };

  componentDidMount() {
    if (this.inputRef.current) {
      console.log(`Input width:${this.inputRef.current.clientWidth}`);
    }
  }

  render() {
    return (
      <>
        <h3>{this.props.head}</h3>
        Count:
        <input
          ref={this.inputRef}
          onChange={this.onInputChange}
          value={this.state.name}
        />
      </>
    );
  }
}

export default UseRefCComp;
