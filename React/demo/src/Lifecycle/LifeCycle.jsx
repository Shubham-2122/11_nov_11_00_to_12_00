import React, { Component } from 'react'
import Header from '../Layout/Coman/Header'

class LifeCycle extends Component {

    constructor(){
        super()
        this.state = {
             name : "Hetvi",
             count : 0
        }
    }

    componentDidMount(){
        console.log("Hello component mounting")
    }

    // shouldComponentUpdate(){
    //     console.log("Hello shouled update?")
    // }

    componentDidUpdate(){
        console.log("Hello Compoenent state update")
    }

    componentWillUnmount(){
        console.log("unmoting phase")
    }



  render() {
    return (
      <div>
        <Header />
        <h1>Hello this Class in Life Cycle</h1>
        <h1>Hello .. {this.state.name}</h1>
        <h1>count : {this.state.count}</h1>
        <button onClick={()=>{this.setState({name: "Khusboo"})}}>chnage name</button>
        <button onClick={()=>this.setState({count : this.state.count + 1})}>Increment</button>
      </div>
    )
  }
}

export default LifeCycle
