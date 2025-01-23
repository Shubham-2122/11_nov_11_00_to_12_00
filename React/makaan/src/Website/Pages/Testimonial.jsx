import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'

function Testimonial() {
    return (
        <div>
            <div className="container-xxl bg-white p-0">
                <Header />
                {/* Header Start */}
                <div className="container-fluid header bg-white p-0">
                    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div className="col-md-6 p-5 mt-lg-5">
                            <h1 className="display-5 animated fadeIn mb-4">Testimonial</h1>
                            <nav aria-label="breadcrumb animated fadeIn">
                                <ol className="breadcrumb text-uppercase">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-body active" aria-current="page">Testimonial</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 animated fadeIn">
                            <img className="img-fluid" src="img/header.jpg" alt />
                        </div>
                    </div>
                </div>
                {/* Header End */}
                {/* Search Start */}
                <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: 35 }}>
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0 py-3">
                                            <option selected>Property Type</option>
                                            <option value={1}>Property Type 1</option>
                                            <option value={2}>Property Type 2</option>
                                            <option value={3}>Property Type 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0 py-3">
                                            <option selected>Location</option>
                                            <option value={1}>Location 1</option>
                                            <option value={2}>Location 2</option>
                                            <option value={3}>Location 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search End */}
                {/* Testimonial Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Our Clients Say!</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                            <div className="testimonial-item bg-light rounded p-3">
                                <div className="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{ width: 45, height: 45 }} />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-3">
                                <div className="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{ width: 45, height: 45 }} />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-3">
                                <div className="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{ width: 45, height: 45 }} />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                <Footer />
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
            </div>

        </div>
    )
}

export default Testimonial
