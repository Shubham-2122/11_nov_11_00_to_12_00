import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseTable() {

    const [user, setuser] = useState([])


    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
       try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(res.data)
        setuser(res.data)
       } catch (error) {
        console.log("error data",error)
       }
    }


    return (
        <div>
            {/* https://fakestoreapi.com/products */}
            <h1>Hello user data collection</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">city</th>
                        <th scope="col">name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && user.map((user, index) => {
                            // console.log(user)
                            const {id,name,email,address,company} = user
                            return (
                                <tr key={index}>
                                    {/* <th scope="row">{user.id}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td> */}
                                      <th scope="row">{id}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{address.city}</td>
                                    <td>{company.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default UseTable
