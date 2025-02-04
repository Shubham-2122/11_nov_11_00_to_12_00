import React, { useEffect, useState } from 'react'
import AHeader from '../Acoman/AHeader';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios';

function ProertyManage() {

    const [propertylist, setpropertylist] = useState([])

    useEffect(() => {
        getdata()
    }, [])

    // all data get
    const getdata = async () => {
        const res = await axios.get("http://localhost:3000/propertylist")
        // console.log(res.data)
        setpropertylist(res.data)
    }


    // get view id
    const [viewdata, setviewdata] = useState({
        id: "",
        hometype: "",
        Proertytype: "",
        img: "",
        price: "",
        name: "",
        location: "",
        room: "",
        bath: "",
        yard: ""
    })

    // id get
    const getview = async (id) => {
        const res = await axios.get(`http://localhost:3000/propertylist/${id}`)
        console.log(res.data)
        setviewdata(res.data)
    }

    // delete data
    const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/propertylist/${id}`)
        console.log(res.data)
        getdata()
    }



    // model and data laei java
    const [editproperty, seteditperoprty] = useState(null)
    const [editingproperty, seteditingperoprty] = useState({
        id: "",
        hometype: "",
        Proertytype: "",
        img: "",
        price: "",
        name: "",
        location: "",
        room: "",
        bath: "",
        yard: ""
    })

    // model open
    const savedata = (data) => {
        seteditperoprty(data)
        seteditingperoprty(data)
    }

    const hadnleupdate=async(e)=>{
          // Refresh na thay
          e.preventDefault();

          try {
            const res = await axios.put(`http://localhost:3000/propertylist/${editingproperty.id}`,editingproperty)
            console.log(res.data);
            getdata()
            seteditperoprty(null)

          } catch (error) {
            console.log("api does not match..")
          }
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
                                            <button className='btn btn-success mx-2' onClick={() => savedata(proprty)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deletedata(id)}>Delete</button>
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
                                                            <a href><img className="img-fluid" style={{ height: "300px", width: "100%" }} src={viewdata.img} alt /></a>
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
                
                {
                            editproperty && (
                                <div className="container">
                                    <div className="wow fadeInUp" data-wow-delay="0.5s">
                                        <h1>Udpate Property data</h1>
                                        <form >
                                            <div className="row g-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="name" onChange={(e)=>seteditingperoprty({...editingproperty,name:e.target.value})} value={editingproperty.name}  placeholder="Proerty Name" />
                                                        <label htmlFor="name">Property Name</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Proertytype"  onChange={(e)=>seteditingperoprty({...editingproperty,Proertytype:e.target.value})} value={editingproperty.Proertytype}  placeholder="Proertytype" />
                                                        <label htmlFor="Proertytype">Proertytype</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="name"  onChange={(e)=>seteditingperoprty({...editingproperty,price:e.target.value})} value={editingproperty.price} placeholder="Proerty Price" />
                                                        <label htmlFor="name">Property Price</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control" id="Proertytype"  onChange={(e)=>seteditingperoprty({...editingproperty,yard:e.target.value})} value={editingproperty.yard}  placeholder="Proerty yard" />
                                                        <label htmlFor="Proertytype">Proerty yard</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <select className="form-select border-0 py-3 "  onChange={(e)=>seteditingperoprty({...editingproperty,hometype:e.target.value})} value={editingproperty.hometype} >
                                                        <option hidden>Property hometype</option>
                                                        <option value="Villa">Villa</option>
                                                        <option value="Appartment">Appartment</option>
                                                        <option value="Office">Office</option>
                                                        <option value="House">House</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select className="form-select border-0 py-3"  onChange={(e)=>seteditingperoprty({...editingproperty,room:e.target.value})} value={editingproperty.room}  >
                                                        <option selected>Property Room</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                        <option value={5}>5</option>
                                                        <option value={6}>6</option>
                                                    </select>
                                                </div>
                                                <div className="col-md-3">
                                                    <select className="form-select border-0 py-3"  onChange={(e)=>seteditingperoprty({...editingproperty,bath:e.target.value})} value={editingproperty.bath}  >
                                                        <option selected>Property Bath</option>
                                                        <option value={2}>2</option>
                                                        <option value={3}>3</option>
                                                        <option value={4}>4</option>
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <input type="url" className="form-control" id="subject"  onChange={(e)=>seteditingperoprty({...editingproperty,img:e.target.value})} value={editingproperty.img} placeholder="Property img" />
                                                        <label htmlFor="subject">Proerty image</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea className="form-control"   onChange={(e)=>seteditingperoprty({...editingproperty,location:e.target.value})} value={editingproperty.location} placeholder="Property Address/ location" id="message" style={{ height: 150 }} defaultValue={""} />
                                                        <label htmlFor="message">Location</label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={hadnleupdate}>Update Property</button>
                                                </div>
                                                <div className="col-6">
                                                    <button className="btn btn-primary w-100 py-3" onClick={()=>seteditperoprty(null)} >cancle property</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )
                        }
            </div>
        </div>
    )
}

export default ProertyManage
