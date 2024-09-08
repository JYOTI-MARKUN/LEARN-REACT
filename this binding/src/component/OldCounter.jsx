import { Component } from "react";


class OldCounter extends Component{
constructor(props){
  super(props)
  this.state = {
    count: 0,
  
  }
}

decreaseCount () {
  console.log(this)
  this.setState({count:this.state.count-1})}

render(){

    const {name }= this.props
    const {count} = this.state
    return(
    <>
     <h1 id="counter-title">{name}</h1>
      <div className="flex text-center">
        <button
          onClick={() => {
            console.log(this)
            this.setState({count:count+1})}}
          className="w-20 bg-blue-700 m-2 text-white"
        >
          +
        </button>
        <h1 className="m-2">
          Counter <span>{count}</span>
        </h1>
        <button
          onClick={
         this.decreaseCount.bind(this)
            
            }
              
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