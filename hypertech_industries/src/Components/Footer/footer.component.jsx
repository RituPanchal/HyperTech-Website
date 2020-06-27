import React from "react";
import "../Footer/css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="">
                <div className="d-flex justify-content-center p-md-5 m-md-5">
                    <div className="explorer p-md-3">
                        <div className="explorer-head alternate-gothic white mb-md-5">EXPLORE</div>
                        <ul className="explore-nav helvetica-light white">
                            <li>
                                <Link to="/about-us">About us</Link>
                            </li>
                            <li>
                                <Link to="/our-approach">Our Approach</Link>
                            </li>
                            <li>
                                <Link to="/facilities-equipment">Facilities and Equipment</Link>
                            </li>
                            <li>
                                <Link to="/services">Services</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="our-offices p-md-3">
                        <div className="our-offices-head alternate-gothic white mb-md-5">OUR OFFICES</div>
                        <div className="address-content helvetica-light white mb-md-4">
                            <a href="https://www.google.com/maps/place/Hypertech+Industries/@19.1784448,73.184997,15z/data=!4m5!3m4!1s0x0:0x8d321dcb3fe926be!8m2!3d19.1784448!4d73.184997">
                                Hypertech Industries<br />
                                Ambernath, <br />
                                Maharashtra 421506
                            </a>
                        </div>
                        <div className="office-map">
                            <iframe id="office-map-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15073.5340302484!2d73.184997!3d19.1784448!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d321dcb3fe926be!2sHypertech%20Industries!5e0!3m2!1sen!2suk!4v1588883853641!5m2!1sen!2suk"></iframe>
                        </div>
                    </div>
                    <div className="contact p-md-3">
                        <div className="contact-head alternate-gothic white mb-md-5">CONTACT</div>
                        <div className="contact-no helvetica-light white">
                            <ul className="contact-list">
                                <li><p>(+91) 9819020501</p></li>
                                <li><p>hypertech.industries@gmail.com</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="page-footer p-md-5 m-md-5 mt-md-4 mt-md-0 text-white">
                    <div className="footer col-12 pt-md-4">
                        <div className="footerL helvetica-light white"> HYPERTECH</div>
                        <div className="footerR helvetica-light white">2020 Hypertech Engineering. All rights Reserved &copy;</div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
