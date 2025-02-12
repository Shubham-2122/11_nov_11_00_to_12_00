import React, { useEffect, useState } from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const redirect = useNavigate()

    const [data,setdata] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        img: "",
        phone: "",
        status: ""
    })

    useEffect(()=>{
        getdata()
    },[])

    const getdata=async()=>{
        try {
            
            const res = await axios.get(`http://localhost:3000/users/${localStorage.getItem("userid")}`)
            console.log(res.data)
            setdata(res.data)

        } catch (error) {
            console.log("api data not found",error)
        }
    }

    const handlechange=(e)=>{
        setdata({
            ...data,
            [e.target.name]:e.target.value
        })
        console.log(data)
    }

    const handlesubmit=async(e)=>{
         // Refresh na thay
         e.preventDefault();

         try {
            // data.status , "block"
            const res = await axios.patch(`http://localhost:3000/users/${data.id}`,data)
            console.log(res.data)

            console.log(res.status)
            if(res.status == 200){
                setdata({
                    id: "",
                    name: "",
                    email: "",
                    password: "",
                    img: "",
                    phone: "",
                    status: ""
                });
                toast.success("Profile Update success");
                redirect("/")

            }

         } catch (error) {
            console.log("api data not found..!",error)
         }
    }


    return (
        <div>
            <Header />
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <form action="" onSubmit={handlesubmit}>
                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Profile data</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput value={data.name} name='name' onChange={handlechange} label='Your Name' id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="phone me-3" size='lg' />
                                        <MDBInput value={data.phone} name='phone' onChange={handlechange} label='your phone number' id='form4' type='tel' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput value={data.email} name='email' onChange={handlechange} label='Your Email' id='form2' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput value={data.password} name='password' onChange={handlechange} label='Password' id='form3' type='password' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="image me-3" size='lg' />
                                        <MDBInput value={data.img} name='img' onChange={handlechange} label='your image' id='form4' type='url' />
                                    </div>

                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                    </div>

                                    <MDBBtn className='mb-4' size='lg'>Update profile</MDBBtn>
                                </form>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src={data.img} fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
            <Footer />
        </div>
    )
}

export default Profile
