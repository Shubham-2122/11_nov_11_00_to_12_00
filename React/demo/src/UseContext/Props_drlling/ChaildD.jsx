import React from 'react'

function ChaildD({name,setname}) {
  return (
    <div>
      <h1>Hello Chaild D Compo</h1>
      <h2>Hello Name :- {name}</h2>
      <button onClick={()=>setname("Shubham")}>Change name</button>
    </div>
  )
}

export default ChaildD
