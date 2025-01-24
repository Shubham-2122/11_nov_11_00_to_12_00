import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function ProertyManage() {

    const [propertylist, setpropertylist] = useState([])

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const res = await axios.get("http://localhost:3000/propertylist")
        // console.log(res.data)
        setpropertylist(res.data)
    }

    return (
        <div>
            <AHeader />
            <div className="container">
                <h1 className='text-center'>Welcome to the Proerty management</h1>
                <MDBTable className='table table-dark'>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>#id</th>
                            <th scope='col'>hometype</th>
                            <th scope='col'>Proertytype</th>
                            <th scope='col'>name</th>
                            <th scope='col'>location</th>
                            <th scope='col'>price</th>
                            <th scope='col'>yard</th>
                            <th scope='col' className='text-center'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {
                            propertylist && propertylist.map((proprty, index) => {
                                const {id,hometype,Proertytype,price,name,location,yard} = proprty
                                return (
                                    <tr>
                                        <th scope='row'>{id}</th>
                                        <td>{hometype}</td>
                                        <td>{Proertytype}</td>
                                        <td>{name}</td>
                                        <td>{location}</td>
                                        <td>{price}</td>
                                        <td>{yard}</td>
                                        <td>
                                            <button className='btn btn-primary'>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default ProertyManage
