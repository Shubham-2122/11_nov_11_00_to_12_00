import React, { createContext, useState } from 'react'
import D from './D'
import B from './B';


export const data = createContext()


function A() {

    const [name,setname] = useState("Hetvi");
    const [form,setfrom] = useState({
        name:"shubham",
        count:0
    })


  return (
    <div>
       <p>Context :-  base on token 1) Create context 2) Provider :- value 3) useContext (casumer)</p>
      <h1>Hello This A Compo</h1>
      <data.Provider value={{name,setname,form,setfrom}}>
            <D />
            <B />
      </data.Provider>
    </div>
  )
}

export default A
