import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <Header />
            <h1>hello about compo page</h1>
            <Link to="/about/about1" className='m-4'>About 1</Link>
            <Link to="/about/about2">About 2</Link>

            <Outlet />
            <Footer />
        </div>
    )
}

export default About
