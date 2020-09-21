import React from "react";

const Hero = () => {
    return (
        <div className="hero-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <div className="hero-content">
                            <h5>Present your service</h5>
                            <h2>Make landing page fast and easily.</h2>
                            <p>Create custom landing pages with Shades that convert more visitors than any website—no coding required.
              </p>
                        </div>
                    </div>

                    <div className="col-lg-7 col-xl-6">
                        <div className="subscription-form">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter your email" />
                                    <button className="submit-btn btn--hover-shine ">Subscribe</button>
                                </div>
                                <p className="form-text">Trused by over 50,000+ customers</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
