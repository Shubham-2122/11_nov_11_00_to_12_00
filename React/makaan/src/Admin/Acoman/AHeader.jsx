import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function AHeader() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("adminid")){
            redirect("/alogin")
        }
    })

    const logout=()=>{
        localStorage.removeItem("adminid")
        localStorage.removeItem("adminname");
        redirect("/alogin")
        toast.success("admin logout success")
        console.log("logout")
      
    }

    return (
        <div>
            <div className="container-fluid nav-bar bg-transparent">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <NavLink to="/" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{ width: 30, height: 30 }} />
                        </div>
                        <h1 className="m-0 text-primary">Makaan</h1>
                    </NavLink>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <NavLink to="/dashboard" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">ProertyList</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/perotymanage" className="dropdown-item">Proerty manage</NavLink>
                                    <NavLink to="/addpropty" className="dropdown-item">Add Property</NavLink>
                                
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                            {(
                                ()=>{
                                    if(localStorage.getItem("adminid")){
                                        return(
                                            <>
                                            <NavLink className="nav-item nav-link">hello..{localStorage.getItem("adminname")}</NavLink>
                                            </>
                                        )
                                    }
                                }
                            )()}

                            {/* ()() IIM */}
                            {(
                                ()=>{
                                    if(localStorage.getItem("adminid")){
                                        return(
                                            <>
                                                  <NavLink onClick={logout} className="nav-item nav-link">Alogout</NavLink>
                                            </>
                                        )
                                    }
                                    else{
                                        return(
                                            <>
                                                  <NavLink to="/alogin" className="nav-item nav-link">login</NavLink>
                                            </>
                                        )
                                    }
                                }
                            )()}
                        </div>
                        {/* <a href className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a> */}
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AHeader
