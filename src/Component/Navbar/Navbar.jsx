import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({cart }) {
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm  ">
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-4 " to="/">La Collection</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link to={"/products"} className="nav-link ">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link ">Contact</Link>
                            </li>

                        </ul>
                        <div className="buttons">
                            <Link className='btn btn-outline-dark'>
                                <i className='fa fa-sign-in me-1'></i> Login</Link>
                            <Link className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-user-plus me-1'></i> Register</Link>
                            <Link to="/cart" className='btn btn-outline-dark ms-2'>
                                <i className='fa fa-shopping-cart me-1 '></i> Cart ({cart.length})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
