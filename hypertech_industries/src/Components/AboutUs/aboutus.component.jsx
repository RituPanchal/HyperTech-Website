import React from 'react';
import './css/aboutus.css';
import Footer from '../Footer/footer.component';

const AboutUsComponent = () => {
    return (
        <div className="aboutUs">
            {/* section 1 */}
            <div className="about-head-01">
                &nbsp;
            </div>
            {/* section 2 */}
            <div className="about-container">

                <div className="about-02">
                    <div className="about-no-2-cont alternate-gothic">
                        <h1 className="about-no-2">02</h1>
                    </div>
                    <div className="about-copy yellow alternate-gothic">
                        <h4 className="about-heading">ABOUT US</h4>
                        <h3 className="about-sub-head white">
                            HIGHLY ESTABLISHED MILD STEEL AND STAINLESS STEEL FABRICATORS SINCE 1980.
                        </h3>
                        <div className="line"></div>
                        <p className="about-para white helvetica-light">
                            The business is a privately owned company, which has grown and flourished over the last 39 years, both nationally and internationally, assisting with all manner of projects from small to large.
                        </p>
                    </div>
                </div>
                <div className="about-03">
                    <div className="about-03-cont">
                        <div className="factoryImage">
                            <div className="factoryImg">
                            </div>
                        </div>
                        <div className="aboutDetailsContainer">
                            <div className="whiteBlockContainer">
                                <h5 className="about-section alternate-gothic black">
                                    NOW COVERING A SITE OF 33,000M², OUR COMPANY'S˜MEDIUM TO HEAVY STEEL FABRICATION˜FACILITY IS GEARED TOWARDS THE EFFICIENT SUPPLY OF EQUIPMENT IN MILD
                                    STEEL AND STAINLESS STEEL.
                                </h5>
                            </div>
                            <div className="additionalCopy helvetica-light white">
                                <p>
                                    There are dedicated workshops for both forms of steel fabrication, with a capacity of around 250 – 300 tons per month.
                                </p>
                                <div className="stripesImage">


                                </div>
                                <div className="locationText helvetica-light white">
                                    <b>Meyerton Engineering</b>
                                    &nbsp;is&nbsp;conveniently situated 55km south of Johannesburg on the
                                    R59 to Vereeniging. We have embraced the ever-advancing evolution of technology
                                    in order to offer the most effective steel fabrication solutions to our clients.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-04">
                    <div className="imgBlock">
                        <h5 className="block-text alternate-gothic white text-uppercase">
                            Our mild steel and stainless steel production facility also has a well-established and professional administration team that ensures the company's compliance not
                            only to IFRS accounting standards and B-BBEE, but also to the laws and by laws
                            of South Africa and the industry.
                        </h5>
                    </div>
                    <p className="borderedText">
                        Much of our success can be attributed to our reputable and reliable client base, which has come to appreciate the service and quality received from <b _ngcontent-c3=""> Meyerton Engineering.</b>
                    </p>
                </div>
                <Footer/>
            </div>
        </div>

    );
}

export default AboutUsComponent;