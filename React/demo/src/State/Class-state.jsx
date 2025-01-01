// state :- data change but same file data mauniplate
// state :- as object / array in class
// class preinbulit :'- this
// this.state :- varible 
// this.setstate :- data change karse

import React, { Component } from 'react'
import Images from './Images';

 class Class_state extends Component {

    constructor(){
        super();
        this.state = {
            count : 0,
            name : "Rutvik",
            profile:{
                course:"Front-end"
            },
            isImage : true
        }
        
    }
    


  render() {
   
    return (
      <div>
        <h1>hello .. {this.state.count}</h1>
        <h1>Hello .. {this.state.count}</h1>
        <button className='btn btn-success' onClick={()=>this.setState({count:this.state.count + 1})}>Incement</button>
        <button className='btn btn-danger' onClick={()=>this.setState({count:this.state.count - 1})}>Decment</button>
        {/* <button className='btn btn-primary' onClick={()=>this.setState({count:this.state.count * 0})}>Reset</button> */}
        <button className='btn btn-primary' onClick={()=>this.setState({count: 0})}>Reset</button>
      
        <h1>hello name :- {this.state.name}</h1>
        <button className='btn btn-success' onClick={()=>this.setState({name:"Khusboo"})}>Change name</button>
      
        <h1>Hello course : {this.state.profile.course}</h1>

        <button className='btn btn-danger' onClick={()=>this.setState({isImage:false})}>Hide</button>
        <button className='btn btn-primary'  onClick={()=>this.setState({isImage:true})}>Show</button>

        <button className='btn btn-success'>Toggle</button>

        {
            (this.state.isImage) ? <Images /> : false
        }

      </div>
    )
  }
}

export default Class_state
