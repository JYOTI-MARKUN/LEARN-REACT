import { Component } from "react";
import withCounter from "../WithCounter";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

  }

  increaseCount=()=> {
    console.log(this);
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log(this.props)  // here the wrapped function will come from ClickCounter
    const { name } = this.props;
    const { count } = this.state;
    return (
      <>
        <h1 id="counter-title">ClickCouter</h1>
        <div className=" text-center">
          <h1
            className="cursor-pointer bg-gray-300 text-2xl"
            onClick={this.increaseCount}
          >
            {count}
          </h1>
        </div>
      </>
    );
  }

  
}

export default withCounter(ClickCounter);


