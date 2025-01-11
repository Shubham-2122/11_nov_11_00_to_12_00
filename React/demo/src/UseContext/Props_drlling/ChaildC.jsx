import React from 'react'
import ChaildD from './ChaildD'

function ChaildC({name,setname}) {
  return (
    <div>
      <h1>Hello Chaild C Compo</h1>

      <ChaildD name={name} setname={setname} />
    </div>
  )
}

export default ChaildC
