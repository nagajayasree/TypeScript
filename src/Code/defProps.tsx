import * as React from "react";

// func
interface GreetProps {
  greet?: string;
}
const Greet = ({ greet = "Hi" }: GreetProps) => <div>{greet}</div>;

// class
type WishProps = {
  wish?: string;
};

class Wish extends React.Component<WishProps> {
  render() {
    const { wish = "hello" } = this.props;
    return <div>{wish}</div>;
  }
}

//typying defaultProps

//for func comp
type PlayProps = { game: string } & typeof defaultProps;
const defaultProps = {
  game: "tennis",
};

const Play = (props: PlayProps) => <div>{props.game}</div>;
Play.defaultProps = defaultProps;

//for class comp
type ActivityProps = typeof Activity.defaultProps & {
  work: string;
};

class Activity extends React.Component<ActivityProps> {
  static defaultProps = {
    work: "dance",
  };
  render() {
    return (
      <div>
        Default props in State Component
        <div>{this.props.work}</div>
      </div>
    );
  }
}

export { Greet, Wish, Play, Activity };
