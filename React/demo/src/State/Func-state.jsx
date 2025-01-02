// react v16 function 
// hooks :- only use for function 
// hooks easy to use reuse

// 1) useState({})

// syatx :- 
// varibale define , secound setname change
// const [name,setname] = useState("user")

import React, { useState } from 'react'
import Images from './Images';

function Func_state() {

    // varible , data change set = useState
    const [name,setname] = useState("Hetvi");
    const [count,setcount] = useState(0);

    const [isImage,setisIamge] = useState(true)

    const decment=()=>{
        setcount(count-1)
    }

  return (
    <div>
      <h1>Hello this function state</h1>
      <h1>hello name :- {name}</h1>
        <button className='btn btn-success' onClick={()=>setname("khusboo")}> change name</button>

        <h1>hello number :- {count}</h1>
        <button className='btn btn-success' onClick={()=>setcount(count+1)}>Incrment</button>
        <button className='btn btn-danger' onClick={decment}>Decrment</button>
        {/* <button className='btn btn-success' onClick={()=>setcount(count * 0)}>Zero</button> */}
        <button className='btn btn-success' onClick={()=>setcount(0)}>Zero</button>
            <br />
        <button className='btn btn-danger mt-5' onClick={()=>setisIamge(false)}>Hide</button>
        <button className='btn btn-danger mt-5' onClick={()=>setisIamge(true)}>show</button>
        <button className='btn btn-danger mt-5' onClick={()=>setisIamge(!isImage)}>Toggle</button>
        {(isImage)?<Images /> : false}
    </div>
  )
}

export default Func_state
