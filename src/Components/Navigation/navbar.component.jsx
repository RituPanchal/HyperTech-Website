import React from 'react';
import { Link } from 'react-router-dom';
import "../Navigation/css/navbar.css";
import '../Navigation/js/navbar';

const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/home">
                HYPERTECH
                {/* <img className="img-size" src="./Lib/images/hypertec_logo.png" />  */}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav mr-auto nav-fill w-100">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link" >
                            <span className="active light">Home</span>
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to="/about-us" className="nav-link">
                            <span className="light">About us</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/our-approach" className="nav-link">
                            <span className="light">Our Approach</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/facilities-equipment" className="nav-link">
                            <span className="light">Facilities Equipment</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className="nav-link">
                            <span className="light">Services</span>
                        </Link>
                    </li>
                    <a href="mailto:hypertec.industries@gmail.com" target="_blank" className="btn btn-outline-warning emailBtn">
                        <span>Get in touch</span>
                    </a>
                </ul>
            </div>
        </nav>
    );
}

export default NavBarComponent;