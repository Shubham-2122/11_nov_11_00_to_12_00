import React, { useContext } from 'react'
import { data } from './A'

function B() {

    const {form,setfrom} = useContext(data)

  return (
    <div>
          <h1>Hello This B Compo</h1>
          <h1>hello name :-{form.name}</h1>
          <button onClick={()=>{setfrom({...form,name:"jiger sir"})}}>Change name</button>
          <h1>hello count :- {form.count}</h1>
          <button onClick={()=>{setfrom({...form,count:form.count+1})}}>incement</button>
          <button onClick={()=>{setfrom({...form,count:0})}}>zero</button>
    </div>
  )
}

export default B
