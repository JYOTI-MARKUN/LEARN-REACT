import { Component } from "react";


class OldCounter extends Component{
constructor(props){
  super(props)
  this.state = {
    count: 0,
    count1:0,
  }
  console.log(props)
}

  render(){
    
    // console.log(this)
    const {name }= this.props
    const {count,count1} = this.state
    return(
    <>
     <h1>{name}</h1>
      <div className="flex text-center">
        <button
          onClick={() => {this.setState({count:count+1})}}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          +
        </button>
        <h1 className="m-2">
          Counter <span>{count}</span>
        </h1>
        <button
          onClick={() => {this.setState({count:count-1})}}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          -
        </button>
      </div>

      <div className="flex text-center">
        <button
          onClick={() => {this.setState({count1:count1+1})}}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          +
        </button>
        <h1 className="m-2">
          Counter <span>{count1}</span>
        </h1>
        <button
          onClick={() => {this.setState({count1:count1-1})}}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          -
        </button>
      </div>
    </>
    )
  }
}

export default OldCounter