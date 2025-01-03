// As a object Form hadling
// as {key and value} 
// ...spred

import React, { useState } from 'react'

function Func2_state() {

    const [data,setdata] = useState({
        count : 0,
        name : "Rutvik"
    })

  return (
    <div>
      <h1>Hello Func 2 as object use</h1>
      <h1>Hello name :- {data.name}</h1>
      <button  className='btn btn-success' onClick={()=>setdata({...data,name:"Hetvi"})}>Chnage name</button>

      <h1>Count value :- {data.count} </h1>
      <button className='btn btn-primary' onClick={()=>setdata({...data,count : data.count + 1})}>Incement</button>
      <button className='btn btn-danger' onClick={()=>setdata({...data,count : data.count - 1})}>Incement</button>
      <button className='btn btn-primary' onClick={()=>setdata({...data,count : 0})}>Resent</button>
    </div>
  )
}

export default Func2_state
