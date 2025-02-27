import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createdata } from '../feachure/userDetails'
import { useNavigate } from 'react-router-dom'

function Create() {

  const redirect = useNavigate()

  const [data,setdata] = useState({
    id:"",
    name:"",
    email:"",
    password:"",
    phone:""
  })

  const dispatch = useDispatch()

  const getchange = (e)=>{
    setdata({
      ...data,
      id : new Date().getTime().toString(),
      [e.target.name]:e.target.value
    })
    console.log(data)
  } 

  const hadnalesubmit=(e)=>{
    e.preventDefault();
    dispatch(createdata(data))
    redirect("/read")
  }

  

  return (
    <div className='mt-5'>
      <div className='container'>
        <h1>Form data add</h1>
        <form action="" onSubmit={hadnalesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Name</label>
            <input type="text" className="form-control" value={data.name} onChange={getchange} name='name' id="exampleFormControlInput1" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" value={data.email} onChange={getchange} name='email' id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Phone</label>
            <input type="tel" className="form-control" value={data.phone}  onChange={getchange} name='phone' id="exampleFormControlInput1" placeholder="Enter your number" />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Password</label>
            <input type="password" className="form-control" value={data.password} onChange={getchange} name='password' id="exampleFormControlInput1" placeholder="Enter your Password" />
          </div>
          <div>
            <input type="submit" />
          </div>

        </form>
      </div>

    </div>
  )
}

export default Create
