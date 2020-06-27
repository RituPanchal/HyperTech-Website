import React from 'react';
import '../Home/css/home.css';
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "../Home/js/home.js";
import Footer from '../Footer/footer.component';

const HomeComponent = () => {
    return (
        <React.Fragment>

            <div id="homeId" className="home">
                {/* section 1 */}
                <div className="d-flex justify-content-end home-head-01 pt-md-5">
                    <div className="home-01-head-container">
                        <p className="home-01-head-text-one text-uppercase yellow alternate-gothic">
                            HyperTech Engineering
                        </p>
                        <p className="home-01-subhead-text-one text-uppercase white alternate-gothic">
                            MILD STEEL & STAINLESS STEEL<br />
                            FABRICATORS MANUFACTURING<br />
                            EXCELLENCE.
                        </p>
                    </div>
                </div>

                {/* section 2 */}
                <div className="row home-head-02">
                    <div className="col-md-8 left-02 pt-md-4">
                        <p className="home-02-head-text text-uppercase yellow alternate-gothic pt-md-5 mt-md-5 ml-md-5 pl-md-5">
                            02
                        </p>
                        <div className="left-02-container ml-md-5 mt-md-5">
                            <p className="home-02-subhead-text text-uppercase black alternate-gothic ml-md-3 pl-md-5">
                                MEYERTON ENGINEERING (PTY) LTD
                            </p>
                            <p className="home-02-sub-1 black helvetica-regular ml-md-3 pl-md-5">
                                are highly established mild steel and
                                stainless steel fabricators and have
                                been since 1980.
                            </p>
                            <p className="home-02-sub-2 black helvetica-light ml-md-3 mb-md-5 pl-md-5">
                                The business is a privately owned company, which has grown and
                                flourished over the last 40 years, both nationally and internationally,
                                assisting with all manner of projects from small to large.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 right-02">&nbsp;</div>
                </div>

                {/* section 3 & 4*/}
                <div className="row head-03-04 p-md-5 d-flex justify-content-center">
                    <div className="col-md-5 left-03 m-md-3 p-md-5">
                        <div className="no-03 alternate-gothic yellow ml-md-4">
                            03
                        </div>
                        <p className="approach-03 text-uppercase alternate-gothic white ml-md-4 mb-md-5">
                            OUR APPROACH
                        </p>
                        <div className="left-03-mid-container p-md-3">
                            <div className="approach-content white helvetica-regular p-md-3">
                                We have a very methodical approach to
                                mild and stainless steel fabrication. It is
                                comprised of five integral parts that work
                                cohesively with one another.
                            </div>
                        </div>
                        <div className="left-03-bottom-container p-md-3 col-md-12">
                            <div className="read-03-content helvetica-light col-md-10 float-left">
                                Read More
                            </div>
                            <span className="fa fa-long-arrow-right left-03-arrow col-md-1" aria-hidden="true"></span>
                        </div>
                    </div>

                    <div className="col-md-5 right-04 m-md-3 p-md-5">
                        <div className="no-04 alternate-gothic yellow ml-md-4">
                            04
                        </div>
                        <p className="services-04 text-uppercase alternate-gothic white ml-md-4 mb-md-5">
                            OUR SERVICES
                        </p>
                        <div className="right-04-mid-container p-md-3">
                            <div className="services-content white helvetica-regular p-md-3">
                                From processing to the administration
                                involved in production, we offer the
                                highest standard of professional service
                                that is broken down into two major areas.
                            </div>
                        </div>
                        <div className="right-04-bottom-container p-3 col-md-12">
                            <div className="read-04-content helvetica-light col-md-10 float-left">
                                Read More
                            </div>
                            <span className="fa fa-long-arrow-right right-04-arrow col-md-1" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
            
                {/* section 5 */}
                <div className="head-05">
                <div id="console"></div>
                    <div className="white-bg pt-md-3">
                        <div className="company-stats-text alternate-gothic black p-md-5">COMPANY STATS</div>
                        <div id="overlayId" className="overlay justify-content-center">
                            <div className="row w-100 p-md-5 overlayRow">
                                
                                <div className="block1 col-md-3">
                                    <div className="img-sub"></div>
                                    <p className="helvetica-light white counter-title p-md-5">
                                        Meyerton Engineering<br/>
                                        total site spanning<br/>
                                    </p>
                                    <span className="timer1 alternate-gothic white timer">1000</span><span>m2</span>
                                </div>
                                <div className="block2 col-md-3">
                                    <div className="img-sub"></div>
                                    <p className="helvetica-light white counter-title p-md-5">
                                        Manufacturing<br/>
                                        excellence since
                                    </p>
                                    <span className="timer2 alternate-gothic white timer">1500</span><span>m2</span>
                                    
                                </div>
                                <div className="block3 col-md-3">
                                    <div className="img-sub"></div>
                                    <p className="helvetica-light white counter-title p-md-5">
                                        Per month<br/>
                                        ton capacity
                                    </p>
                                    <span className="timer3 alternate-gothic white timer">1000</span><span>m2</span>
                                </div>
                                <div className="block4 col-md-3">
                                    <div className="img-sub"></div>
                                    <p className="helvetica-light white counter-title p-md-5">
                                        Average<br/>
                                        employees                  
                                    </p>
                                    <span className="timer4 alternate-gothic white timer">3000</span><span>m2</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="black-bg">
                    </div>
                </div>

                {/* footer */}
                <Footer/>
            
            </div>
            {/* home div */}
        </React.Fragment>
    );
}

export default HomeComponent;