import { Component } from "react";

class HoverCounter extends Component {
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
    
    const { count } = this.state;
    return (
      <>
        <h1 id="counter-title">ClickCouter</h1>
        <div className=" text-center">
          <h1
            className="cursor-pointer bg-blue-300 text-2xl"
            onMouseEnter={this.increaseCount}
          >
            {count}
          </h1>
        </div>
      </>
    );
  }

  
}

export default HoverCounter;


