import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfount() {

  // route use nav use
  const redirect = useNavigate();

  const goback=()=>{
    redirect("/")
  }


  return (
    <div>
        <h1 className='bg-danger p-5 text-center'>404 not Found</h1>
        
      <h1>hello not found pages</h1>
      <button onClick={goback} className='btn btn-success'>Go back to Home</button>
    </div>
  )
}

export default Notfount
