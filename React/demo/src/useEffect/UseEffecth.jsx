// effect :- function logic side effect. 
// useEffect :- as parameter first fucntion ,second para (opational) depensis
// reder useEffect :- dom re-reder api stops 

import React, { useEffect, useState } from 'react'

function UseEffecth() {

    const [count,setcount] = useState(0)

    // 1) 
    // without depe fucntion re-reder
    // useEffect(()=>{
    //     console.log("Hello this useEffect fun")
    // })

    // 2) 
    // useEffect(()=>{
    //     console.log("without reder");
    //     // api concepet
    //     // with depen blank array
    //     return()=>{
    //         console.log("Hello with redering")
    //     }
    // },[])

    // 3) data state 
    useEffect(()=>{
        console.log("without redering")
        return()=>{
            console.log("with data state rending");
        }
    },[count])


  return (
    <div>
      <h1>Hello this useEffect </h1>
      <h1>count value :- {count}</h1>
      <button onClick={()=> setcount(count+1)}>Incement</button>
    </div>
  )
}

export default UseEffecth
