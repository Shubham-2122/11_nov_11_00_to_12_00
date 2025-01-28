import React, { useState } from 'react'
import AHeader from '../Acoman/AHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Addproperty() {

    const redirect = useNavigate()

    const [proerty,setproerty] = useState({
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

    const getchnage=(e)=>{
        setproerty({
            ...proerty,
            id:new Date().getTime().toString(),
            [e.target.name]:e.target.value
        })
        console.log(proerty)
    }

    const hadalesubmit=async(e)=>{
        e.preventDefault()

        if(proerty.Proertytype == "" ){
            console.log("pls filed frist")
            return false
        }

        try {
            
            const res = await axios.post("http://localhost:3000/propertylist",proerty);
            console.log(res.data)
            redirect("/perotymanage")
            setproerty({
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


        } catch (error) {
            console.log("Api Not found",error)
        }
    }

    return (
        <div>
            <AHeader />
            <div className="container">
                <div className="wow fadeInUp" data-wow-delay="0.5s">
                    <h1>Add Property data</h1>
                    <form onSubmit={hadalesubmit}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" onChange={getchnage} id="name" name='name' value={proerty.name} placeholder="Proerty Name" />
                                    <label htmlFor="name">Property Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control"  onChange={getchnage} id="Proertytype" name='Proertytype'  value={proerty.Proertytype} placeholder="Proertytype" />
                                    <label htmlFor="Proertytype">Proertytype</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control"  onChange={getchnage} id="name" name='price' value={proerty.price} placeholder="Proerty Price" />
                                    <label htmlFor="name">Property Price</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control"  onChange={getchnage} id="Proertytype" name='yard' value={proerty.yard} placeholder="Proerty yard" />
                                    <label htmlFor="Proertytype">Proerty yard</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <select className="form-select border-0 py-3"  onChange={getchnage} name='hometype' value={proerty.hometype}>
                                    <option hidden>Property hometype</option>
                                    <option value="Villa">Villa</option>
                                    <option value="Appartment">Appartment</option>
                                    <option value="Office">Office</option>
                                    <option value="House">House</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select border-0 py-3"  onChange={getchnage} name='room' value={proerty.room}>
                                    <option selected>Property Room</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <select className="form-select border-0 py-3"  onChange={getchnage} name='bath' value={proerty.bath}>
                                    <option selected>Property Bath</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="url" className="form-control"  onChange={getchnage} id="subject" name='img' value={proerty.img} placeholder="Property img" />
                                    <label htmlFor="subject">Proerty image</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control"  onChange={getchnage} value={proerty.location} name='location' placeholder="Property Address/ location" id="message" style={{ height: 150 }} defaultValue={""} />
                                    <label htmlFor="message">Location</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Add Property</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addproperty
