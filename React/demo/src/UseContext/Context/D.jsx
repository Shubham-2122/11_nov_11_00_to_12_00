import React, { useContext } from 'react'
import { data } from './A'

function D() {

    const {name,setname} = useContext(data)

    return (
    <div>
          <h1>Hello This D Compo</h1>
          <h1>Hello name :- {name}</h1>
          <button onClick={()=>{setname("khusboo")}}>change name</button>
          
    </div>
  )
}

export default D
