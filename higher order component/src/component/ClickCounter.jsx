import { Component } from "react";
import WithCounter from "../WithCounter";

class ClickCounter extends Component {
  render() {
    console.log(this.props)  // here the wrapped function will come from ClickCounter
    const { name } = this.props;
    console.log(name)
    return (

      <>
        <h1 id="counter-title">ClickCouter</h1>
        <div className=" text-center">
          <h1
            className="cursor-pointer bg-gray-300 text-2xl"
            onClick={this.props.increaseCount}
          >
            {this.props.count}
          </h1>
        </div>
      </>
    );
  }

  
}

export default WithCounter(ClickCounter);


