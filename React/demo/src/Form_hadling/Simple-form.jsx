// state defult null "" , name define
// setname

import React, { useState } from 'react'

function Simple_form() {

    const [name,setname] = useState("");
    const [password,setpassword] = useState("")

    const getchange=(e)=>{
        setname(e.target.value)
        console.log(name)
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <form className=''>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Enter name</label>
                            {/* <input value={name} onChange={(e)=>setname(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                            <input value={name} onChange={getchange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input value={password} onChange={(e)=>setpassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Simple_form
