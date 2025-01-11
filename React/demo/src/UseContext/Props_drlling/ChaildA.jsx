import React, { useState } from 'react'
import ChaildB from './ChaildB'

function ChaildA() {

    const [name,setname] = useState("Rutvik")

  return (
    <div>
      <h1>Hello Chaild A Compo</h1>
      <ChaildB name={name} setname={setname}  />
    </div>
  )
}

export default ChaildA
