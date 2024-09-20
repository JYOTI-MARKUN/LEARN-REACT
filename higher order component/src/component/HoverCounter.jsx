import { Component } from "react";
import WithCounter from "../WithCounter";

class HoverCounter extends Component {
  render() {
    console.log(this.props)

    return (
      <>
        <h1 id="counter-title">HoverCouter</h1>
        <div className=" text-center">
          <h1
            className="cursor-pointer bg-blue-300 text-2xl"
            onMouseEnter={this.props.increaseCount}
          >
            {this.props.count}
          </h1>
        </div>
      </>
    );
  }

  
}

export default WithCounter(HoverCounter);


