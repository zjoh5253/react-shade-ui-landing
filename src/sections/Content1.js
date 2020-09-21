import React from "react";

const Content1 = () => {
    return (
        <div className="content-section-01">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-sm-6 col-md-5 col-xl-5">
                        <div className="content-left-image">
                            <img src="image/content01.png" alt="" />
                        </div>
                    </div>

                    <div className="col-lg-7 col-sm-6 col-md-7 col-xl-6 offset-xl-1">
                        <div className="content-right-content">
                            <h5>Design is everything</h5>
                            <h2>Present your app features like this way.</h2>
                            <p>We designed and tested prototypes that helped identify pain points in the account creation process.
                Together, we shaped the new standard.</p>
                            <div className="content-btn"><a href="#" className="btn btn--white">Get Started</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content1;
