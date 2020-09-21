import React from 'react'

const Clients = () => {
    return (
        <section className="pricing-section section-spacing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-8 col-sm-11">
                        <div className="section-title pb-lg--85">
                            <span className="title-sm-text">It’s time to taste it</span>
                            <h2>Ready to use our service? Choose a package.</h2>
                        </div>
                    </div>
                </div>

                <div className="row mb-d-30">
                    <div className="col-lg-5 col-xl-4 offset-lg-1 offset-xl-2 col-md-6 mb--30">
                        <div className="pricing-card  active">

                            <div className="card-head">
                                <h6>Basic</h6>
                                <h2><span className="small-title">$</span><span className="big-txt">19</span><span className="month">/month</span>
                                </h2>
                                <p>Good for small business launching their products less then once a year</p>
                            </div>

                            <div className="card-content">
                                <ul className="pricing-list">
                                    <li><span><i className="icon icon-check-2"></i></span>Unlimited Blocks</li>
                                    <li><span><i className="icon icon-check-2"></i></span>5GB Clould Storages</li>
                                    <li className="disable-opt"><span><i className="icon icon-check-2"></i></span>Custom Domain Names</li>
                                    <li className="disable-opt"><span><i className="icon icon-check-2"></i></span>Unlimited Emails</li>
                                </ul>
                                <div className="card-btn">
                                    <a href="" className="btn btn--primary btn--hover-shine">Start Free Trial</a>
                                </div>
                                <p>No credit card required</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-xl-4 col-md-6 mb--30">
                        <div className="pricing-card">

                            <div className="card-head">
                                <h6>Pro</h6>
                                <span className="card-badge">Popular</span>
                                <h2><span className="small-title">$</span><span className="big-txt">29</span><span className="month">/month</span>
                                </h2>
                                <p>Good for small business launching their products less then once a year</p>
                            </div>


                            <div className="card-content">
                                <ul className="pricing-list">
                                    <li><span><i className="icon icon-check-2"></i></span>Unlimited Blocks</li>
                                    <li><span><i className="icon icon-check-2"></i></span>5GB Clould Storages</li>
                                    <li><span><i className="icon icon-check-2"></i></span>Custom Domain Names</li>
                                    <li><span><i className="icon icon-check-2"></i></span>Unlimited Emails</li>
                                </ul>
                                <div className="card-btn">
                                    <a href="" className="btn btn--orange btn--hover-shine">Start Free Trial</a>
                                </div>
                                <p>No credit card required</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );
}

export default Clients