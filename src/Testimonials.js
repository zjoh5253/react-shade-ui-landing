import React from 'react';

const Testimonials = () => {
    return (
        <div className="tesimonial-section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="testimonial-content">
                            <h5>Customers’ story</h5>
                            <h2>50k+ users are showing love.</h2>
                            <p>We designed and tested prototypes that helped identify pain points in the account creation process.
                Together, we shaped the new standard.</p>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="masonry-with-columns">
                            <div className="testimonial-card">

                                <div className="card-content">
                                    <p>“You made it so simple. My new site is so much faster and easier to work with than my old site. I
                                    just
                    choose the page, make the change and click save.</p>
                                </div>

                                <div className="card-id">
                                    <div className="id-img">
                                        <img src="image/t5-nav-1.png" alt="" />
                                    </div>
                                    <div className="id-content">
                                        <h6>Cameron Anderson</h6>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">

                                <div className="card-content">
                                    <p>“Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to
                                    launch
                    in days, not months.”</p>
                                </div>

                                <div className="card-id">
                                    <div className="id-img">
                                        <img src="image/t9-nav-4.png" alt="" />
                                    </div>
                                    <div className="id-content">
                                        <h6>Catherine Simmons</h6>
                                        <span>Marketer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">

                                <div className="card-content">
                                    <p>“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced
                                    users.”
                  </p>
                                </div>

                                <div className="card-id">
                                    <div className="id-img">
                                        <img src="image/t9-nav-6.png" alt="" />
                                    </div>
                                    <div className="id-content">
                                        <h6>Leo Morton</h6>
                                        <span>Marketer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-card">

                                <div className="card-content">
                                    <p>My new site is so much faster and easier to work with than my old site. I just choose the page,
                    make the change and click save. Thanks, guys!</p>
                                </div>

                                <div className="card-id">
                                    <div className="id-img">
                                        <img src="image/t9-nav-5.png" alt="" />
                                    </div>
                                    <div className="id-content">
                                        <h6>Charlie Beck</h6>
                                        <span>Startup Founder</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials