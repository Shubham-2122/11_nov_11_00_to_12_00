import React from 'react'

function Update() {
    return (
        <div>
            <div className='mt-5'>
                <div className='container'>
                    <h1>Form data Update</h1>
                    <form action="" >
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Name</label>
                            <input type="text" className="form-control" name='name' id="exampleFormControlInput1" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" name='email' id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Phone</label>
                            <input type="tel" className="form-control" name='phone' id="exampleFormControlInput1" placeholder="Enter your number" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Password</label>
                            <input type="password" className="form-control" name='password' id="exampleFormControlInput1" placeholder="Enter your Password" />
                        </div>
                        <div>
                            <input type="submit" />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    )
}

export default Update
