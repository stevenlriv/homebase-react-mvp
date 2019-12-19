import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
export class ContentBlockHome extends Component {

    render() {
        return (
            <Fragment>
                <section className="cta section-padding border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Why <span>Homebase</span>?</h2>
                                    <p>We're here to handle all things housing so you can focus on your work.</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6 d-none d-lg-block d-xl-block">
                                        <img src="./assets/img/why-homebase.jpg" width="516" height="344" alt="" className="svg" />
                                    </div>
                                    <div className="col-lg-5 offset-lg-1 col-md-6 mt-5 mt-md-0">
                                        <ul className="feature-list-wrapper list-unstyled">
                                            <li>
                                                <div className="icon"><span className="circle-secondary"><i className="la la-check-circle"></i></span></div>
                                                <div className="list-content">
                                                    <h4>We provide everything</h4>
                                                    <p>From the big items like beds and desks, to the little things like towels, linens and Wi-Fi.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="circle-success"><i className="la la-tasks"></i></span></div>
                                                <div className="list-content">
                                                    <h4>Zero chores, zero headaches</h4>
                                                    <p>Using our platform you have access to our concierge service so you can get those persnickity light bulbs replaced.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon"><span className="circle-primary"><i className="la la-coffee"></i></span></div>
                                                <div className="list-content">
                                                    <h4>Your Life, Your Flexibility</h4>
                                                    <p>Choose from month-to-month up to year long agreements and anywhere in between. No long term commitments necessary. Easily move from one Homebase to another without having to deal with messy leases or approvals.</p>
                                                </div>
                                            </li>
                                        </ul>{/*<!-- ends: .feature-list-wrapper -->*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export class ContentBlockAbout extends Component {

    render() {
        return (
            <Fragment>
                <section className="about-contents section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 contents-wrapper">
                                <div className="contents">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-6">
                                            <img src="./assets/img/about-img1.png" alt="" />
                                        </div>
                                        <div className="col-lg-6 offset-lg-1 col-sm-6 mt-5 mt-md-0">
                                            <h1>About Our Community and Our Expertise</h1>
                                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia
                                                runmollit anim laborum occaecat cupidatat proident. Cupidatat non
                                                proident sunt in culpa officia deserunt.</p>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .contents -->*/}
                                <div className="contents">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-6">
                                            <h1>Why List on <span>Direo</span></h1>
                                            <ul className="list-unstyled list-features p-top-15">
                                                <li>
                                                    <div className="list-count"><span>1</span></div>
                                                    <div className="list-content">
                                                        <h4>Easy Registration</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-count"><span>2</span></div>
                                                    <div className="list-content">
                                                        <h4>Promote your Listing</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-count"><span>3</span></div>
                                                    <div className="list-content">
                                                        <h4>Great Sales Benefits</h4>
                                                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa officia deserunt mollit.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 offset-lg-1 text-right col-sm-6 mt-5 mt-md-0">
                                            <img src="./assets/img/about-img2.png" alt="" />
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .contents -->*/}
                            </div>{/*<!-- ends: .content-block -->*/}
                        </div>
                    </div>
                </section>

            </Fragment>
        )
    }
}
