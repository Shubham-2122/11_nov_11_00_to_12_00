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

    
    // get view

    const getview = async (id) => {
        const res = await axios.get(`http://localhost:3000/propertylist/${id}`)
        console.log(res.data)
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
                                const { id, hometype, Proertytype, price, name, location, yard } = proprty
                                return (
                                    <tr key={index}>
                                        <th scope='row'>{id}</th>
                                        <td>{hometype}</td>
                                        <td>{Proertytype}</td>
                                        <td>{name}</td>
                                        <td>{location}</td>
                                        <td>{price}</td>
                                        <td>{yard}</td>
                                        <td>
                                            {/* <button className='btn btn-primary' data-bs-toggle="modal" href="#exampleModalToggle" onClick={() => getview(id)}>View</button> */}
                                            <button className='btn btn-primary' onClick={() => getview(id)}>View</button>
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        {/* <div>
                            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            Show a second modal and hide this one with the button below.
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            Hide this modal and show the first with the button below.
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default ProertyManage
