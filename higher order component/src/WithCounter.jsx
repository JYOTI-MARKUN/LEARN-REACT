import { Component } from "react";

const withCounter = (WrappedComponent)=>{
     return class NewComponent extends Component{
        render(){
            // console.log(this.props)
            return <WrappedComponent hello="world" {...this.props}/>
        }
    }
}

export default withCounter

