import React from 'react';

const Header = () => {
    return (
        <header className="site-header">
            <div className="container">
                <div className="row justify-content-center align-items-center position-relative">
                    <div className="col-sm-3 col-6 col-lg-2 col-xl-2 order-lg-1">
                        <div className="brand-logo">
                            <a href="/"><img src="image/main-logo.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="col-sm-8 col-lg-3 col-xl-3 d-none d-sm-block order-lg-3 offset-xl-1">
                        <div className="header-btns justify-content-end">
                            <a href="" className="btn btn-outlined--primary btn-sm">Get started</a>
                        </div>
                    </div>
                    <div className="col-sm-1 col-6 col-lg-7 col-xl-6  position-static order-lg-2">
                        <div className="main-navigation">
                            <ul className="main-menu">
                                <li className="menu-item "><a href="/features">Features</a></li>

                                <li className="menu-item"><a href="/services">Services</a></li>

                                <li className="menu-item"><a href="/pricing">Pricing</a></li>

                                <li className="menu-item"><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;