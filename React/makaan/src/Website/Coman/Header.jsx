import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* Navbar Start */}
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
                            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/propertylist" className="dropdown-item">Property List</NavLink>
                                    <NavLink to="/propertytype" className="dropdown-item">Property Type</NavLink>
                                    <NavLink to="/propertyagent" className="dropdown-item">Property Agent</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <a href className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}

        </div>
    )
}

export default Header
