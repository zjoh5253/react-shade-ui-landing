import React from "react";

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="container">
                <div className="row margin-decrese">
                    <div className="col-xl-4 col-lg-5 col-margin">
                        <div className="single-footer">
                            <div className="footer-title">
                                <div className="brand-logo">
                                    <img src="./image/main-logo.png" alt="" />
                                </div>
                            </div>
                            <div className="footer-text">
                                <p>Big, small, online, offline, local. Size doesn't matter. We work on diverse projects for top brands
                                    as well as for cool startups. </p>
                            </div>
                            <ul className="footer-social-list">
                                <li>
                                    <a href="">
                                        <i className="icon icon-logo-fb-simple"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="icon icon-logo-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="icon icon-google"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6 offset-xl-1 col-margin">
                        <div className="single-footer">
                            <div className="footer-title">
                                <h6>Help Menu</h6>
                            </div>
                            <ul className="footer-list">
                                <li><a href="">About</a></li>
                                <li><a href="">Features</a></li>
                                <li><a href="">Works</a></li>
                                <li><a href="">Career</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-xl-3 col-sm-4 col-6 col-margin">
                        <div className="single-footer">
                            <div className="footer-title">
                                <h6>Support</h6>
                            </div>
                            <ul className="footer-list">
                                <li><a href="">Contact</a></li>
                                <li><a href="">Help & Support</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-margin">
                        <div className="single-footer">
                            <div className="footer-title">
                                <h6>Products</h6>
                            </div>
                            <ul className="footer-list">
                                <li><a href=""> Shades Pro</a></li>
                                <li><a href="">Essential Blocks</a></li>
                                <li><a href="">Avasta Dash</a></li>
                                <li><a href="">vApp Landing Page</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
