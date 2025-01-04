import React, { useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

function Fromdata() {

    // const [name,setname] = useState("")
    // const [phone,setphone] = useState("")

    const [form, setform] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        cpassword: ""
    })


    // console.log(form.name)
    // console.log(form.email)

    const getchange = (e) => {
        setform({
            ...form,
            // name == value
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    // submit


    return (
        <div>
            <form action="">
                <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                    <div className='mask gradient-custom-3'></div>
                    <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                            {/* <MDBInput name='name' value={form.name} onChange={(e) => setform({ ...form,name: e.target.value })} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput name='email' value={form.email} onChange={(e) => setform({ ...form,email: e.target.value })} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput name='phone' value={form.phone} onChange={(e) => setform({ ...form,phone: e.target.value })} wrapperClass='mb-4' label='Your phone' size='lg' id='form3' type='tel' />
                            <MDBInput name='password' value={form.password} onChange={(e) => setform({ ...form,password: e.target.value })} wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' />
                            <MDBInput name='cpassword' value={form.cpassword} onChange={(e) => setform({ ...form,cpassword: e.target.value })} wrapperClass='mb-4' label='Repeat your password' size='lg' id='form5' type='password' /> */}

                            <MDBInput name='name' value={form.name} onChange={getchange} wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput name='email' value={form.email} onChange={getchange} wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput name='phone' value={form.phone} onChange={getchange} wrapperClass='mb-4' label='Your phone' size='lg' id='form3' type='tel' />
                            <MDBInput name='password' value={form.password} onChange={getchange} wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password' />
                            <MDBInput name='cpassword' value={form.cpassword} onChange={getchange} wrapperClass='mb-4' label='Repeat your password' size='lg' id='form5' type='password' />



                            <div className='d-flex flex-row justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                            </div>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBContainer>
            </form>
        </div>
    )
}

export default Fromdata
