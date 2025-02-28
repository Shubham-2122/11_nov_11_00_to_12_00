import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedata, showuser } from '../feachure/userDetails'
import { NavLink, useNavigate } from 'react-router-dom'

function Read() {

    const redirect = useNavigate()

    const {user,loading} = useSelector((state)=> state.users)
    console.log(user)

    useEffect(()=>{
        dispatch(showuser())
    },[])

    const dispatch = useDispatch()

    const hadledelete=(id)=>{
        dispatch(deletedata(id))
    }

    // const hadleedit=(id)=>{
    //     redirect(`/update/${id}`)
    // }


    return (
        <div className='container'>
            <h1 className='text-center'>User data manage</h1>
            <table className="table table-dark table-hover mt-2">
                
                <thead>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <td className='text-center'>Action</td>
                    </tr>
                </thead>
                <tbody>
                   {
                     user && user.map((data,index)=>{
                        console.log(data)
                        return(
                            <tr>
                            <th scope="row">{data.id}</th>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td className='text-center'>
                                <button className='btn btn-info'>View</button>
                                <NavLink to={`/update/${data.id}`} className='btn btn-success mx-2' >Edit</NavLink>
                                <button className='btn btn-danger' onClick={()=>hadledelete(data.id)}>delete</button>
                            </td>
                        </tr>
                        )
                     })
                   }
                </tbody>
            </table>

        </div>
    )
}

export default Read
