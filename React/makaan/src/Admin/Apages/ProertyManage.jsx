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

    const [viewdata, setviewdata] = useState({
        id:"",
        hometype:"",
        Proertytype:"",
        img:"",
        price:"",
        name:"",
        location:"",
        room:"",
        bath:"",
        yard:""
    })

    const getview = async (id) => {
        const res = await axios.get(`http://localhost:3000/propertylist/${id}`)
        console.log(res.data)
        setviewdata(res.data)
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
                                            <button className='btn btn-primary' data-bs-toggle="modal" href="#exampleModalToggle" onClick={() => getview(id)}>View</button>
                                            {/* <button className='btn btn-primary' onClick={() => getview(id)}>View</button> */}
                                            <button className='btn btn-success mx-2'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        <div>
                            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                        </div>
                                        <div className="modal-body">
                                            {
                                                (
                                                    <div className="property-item rounded overflow-hidden">
                                                    <div className="position-relative overflow-hidden">
                                                        <a href><img className="img-fluid" style={{height:"300px",width:"100%"}} src={viewdata.img} alt /></a>
                                                        <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{viewdata.Proertytype}</div>
                                                        <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{viewdata.hometype}</div>
                                                    </div>
                                                    <div className="p-4 pb-0">
                                                        <h5 className="text-primary mb-3">${viewdata.price}</h5>
                                                        <a className="d-block h5 mb-2" href>{viewdata.name}</a>
                                                        <p><i className="fa fa-map-marker-alt text-primary me-2" />{viewdata.location}</p>
                                                    </div>
                                                    <div className="d-flex border-top">
                                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />{viewdata.yard}</small>
                                                        <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />{viewdata.room} Bed</small>
                                                        <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />{viewdata.bath} Bath</small>
                                                    </div>
                                                </div>

                                                )
                                            }
                                        </div>
                                        <div className="modal-footer">
                                            {/* <button className="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </MDBTableBody>
                </MDBTable>
            </div>
        </div>
    )
}

export default ProertyManage
