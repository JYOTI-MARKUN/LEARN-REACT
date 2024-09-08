import { Component } from "react";


class OldCounter extends Component{
constructor(props){
  super(props)
  this.state = {
    count: 0,
  
  }
  this.timerId = null
  // console.log(props)
  console.log("constructor")
  console.log(document.querySelector("#counter-title"));  // this will not work  here 
}

componentDidMount() {  
console.log("componentDidMount");
console.log(document.querySelector("#counter-title"));  // this will work only here 

this.timerId = setInterval(()=>{
console.log("hi")
},1000)
}

componentDidUpdate(){
  console.log("componentDidUpdate"); 
  
}

componentWillUnmount(){
  console.log("componentwillunmount")
  clearInterval(this.timerId)
}

render(){
  console.log("rendering")
  console.log(document.querySelector("#counter-title")); // will not work heer
    // console.log(this)
    const {name }= this.props
    const {count} = this.state
    return(
    <>
     <h1 id="counter-title">{name}</h1>
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

    
    </>
    )
  }
}

export default OldCounter