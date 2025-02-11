import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

function Register() {

    const redirect = useNavigate()

    const [register, setregister] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        img: "",
        phone: "",
        status: ""
    })

    const getchange=(e)=>{
        setregister({
            ...register,
            id: new Date().getTime().toString(),
            [e.target.name]:e.target.value,
            status:"unblock"
        })
        console.log(register)
    }

    const handlesubmit=async(e)=>{
        // Refresh na thay
        e.preventDefault();

        try {
        
            const res = await axios.post(`http://localhost:3000/users`,register);
            console.log(res.data)
            redirect("/login")

        } catch (error) {
            console.log("api data not found..",error)
        }
    }

    return (
        <div>
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <form action="" onSubmit={handlesubmit}>
                                    <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput value={register.name} onChange={getchange} name='name' label='Your Name' id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="phone me-3" size='lg' />
                                        <MDBInput value={register.phone} onChange={getchange} name='phone' label='your phone number' id='form4' type='tel' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput value={register.email} onChange={getchange} name='email' label='Your Email' id='form2' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput value={register.password} onChange={getchange} name='password' label='Password' id='form3' type='password' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="image me-3" size='lg' />
                                        <MDBInput value={register.img} onChange={getchange} name='img' label='your image' id='form4' type='url' />
                                    </div>

                                    <div className='mb-4'>
                                        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                                    </div>

                                    <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>
                                </form>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    )
}

export default Register
