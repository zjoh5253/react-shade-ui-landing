import React from "react";

const Content2 = () => {
    return (
        <div className="content-section-02">
            <div className="container">
                <div className="content-wrapper">
                    <div className="row ">
                        <div className="col-lg-7 col-md-7 col-xl-6 order-2 order-md-1">
                            <div className="content-left-content">
                                <h5>Design is everything</h5>
                                <h2>Present your app features like this way.</h2>
                                <p>We designed and tested prototypes that helped identify pain points in the account creation process.
                  Together, we shaped the new standard.</p>
                            </div>
                            <div className="row justify-content-between">
                                <div className="col-lg-6 col-sm-6">

                                    <div className="feature-widget icon-top-round">
                                        <div className="widget-icon">
                                            <i className="icon icon-edit-72"></i>
                                        </div>

                                        <div className="content">
                                            <h5>Easy to use</h5>
                                            <p>Event is not like most tech conferences. We want our design to engage.</p>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <div className="feature-widget icon-top-round">
                                        <div className="widget-icon icon-round">
                                            <i className="icon icon-webpage"></i>
                                        </div>

                                        <div className="content">
                                            <h5>Beautiful Sections</h5>
                                            <p>Event is not like most tech conferences. We want our design to engage.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-5 col-xl-4 offset-xl-2 order-1 order-md-2">
                            <div className="content-right-image">
                                <img src="image/content02.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Content2;
