import * as React from "react";

export interface EventProps {
  title: string;
}

export interface EventState {
  getName: string;
  greet: string;
  Name: string;
}

class Event extends React.Component<EventProps, EventState> {
  state: EventState = { getName: "GetName", Name: "", greet: "Welcome" };
  onClick = (e: React.MouseEvent): void => {
    this.setState({ getName: this.state.Name });
  };
  // onChange = (e: React.FormEvent<HTMLInputElement>): void => {
  //   this.setState({ Name: e.currentTarget.value });
  // };
  onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    this.setState({ Name: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <div>{this.props.title}</div>
        <h1>{this.state.greet}</h1>
        <label htmlFor="">Name:</label>
        <input type="text" value={this.state.Name} onChange={this.onChange} />
        <div>
          {this.state.getName}
          <button onClick={this.onClick}>GetName</button>
        </div>
        <button
          onClick={(e: React.MouseEvent) => {
            this.setState({ greet: "Thank you,Submitted" });
          }}
        >
          Done
        </button>
      </>
    );
  }
}

export default Event;
