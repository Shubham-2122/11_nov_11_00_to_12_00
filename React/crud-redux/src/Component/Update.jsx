import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import { editdata } from '../feachure/userDetails';

function Update() {

    const redirect = useNavigate()

    const { id } = useParams()

    const [userdata, setuserdata] = useState([]);

    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.users)
    // console.log(user)

    useEffect(() => {
        const singleuser = user.filter((data) => data.id === id)

        // console.log(singleuser)
        setuserdata(singleuser[0])

    }, [])
    console.log(userdata)

    const hadnlechange =(e)=>{
        setuserdata({
            ...userdata,
            [e.target.name]:e.target.value
        })
        console.log(userdata)
    }


    const handlesubmit =(e)=>{
        e.preventDefault();
        dispatch(editdata(userdata))
        redirect('/read')
    }

    return (
        <div>
            <div className='mt-5'>
                <div className='container'>
                    <h1>Form data Update</h1>
                    <form action="" onSubmit={handlesubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Name</label>
                            <input value={userdata && userdata.name} onChange={hadnlechange} type="text" className="form-control" name='name' id="exampleFormControlInput1" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input value={userdata && userdata.email}  onChange={hadnlechange} type="email" className="form-control" name='email' id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Phone</label>
                            <input type="tel" value={userdata && userdata.phone}  onChange={hadnlechange} className="form-control" name='phone' id="exampleFormControlInput1" placeholder="Enter your number" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Password</label>
                            <input type="password" value={userdata && userdata.password}  onChange={hadnlechange} className="form-control" name='password' id="exampleFormControlInput1" placeholder="Enter your Password" />
                        </div>
                        <div>
                            <input type="submit" />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Update
