import React from 'react'
import ChaildC from './ChaildC'

function ChaildB({name,setname}) {
  return (
    <div>
      <h1>Hello Chaild B Compo</h1>

        <h1>Hello name : {name}</h1>
        <ChaildC name={name} setname={setname} />
    </div>
  )
}

export default ChaildB
