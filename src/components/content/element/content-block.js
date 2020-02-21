import React, { Component, Fragment } from 'react';
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

export class ContentBlockMembership extends Component {

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
                                            <h1>Members Benefits</h1>
                                            <ul className="list-unstyled list-features p-top-15">
                                                <li>
                                                    <div className="list-count"><span>&#10004;</span></div>
                                                    <div className="list-content">
                                                        <h4>Multiple cities to visit</h4>
                                                        <p>Access to Landing homes across the US</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="list-count"><span>&#10004;</span></div>
                                                    <div className="list-content">
                                                        <h4>Flexibility</h4>
                                                        <p>Live without long term leases, or furniture shopping</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="list-count"><span>&#10004;</span></div>
                                                    <div className="list-content">
                                                        <h4>Cero Fees</h4>
                                                        <p>No applications or fees required to apply for a Homebase</p>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="list-count"><span>&#10004;</span></div>
                                                    <div className="list-content">
                                                        <h4>Cero hassles</h4>
                                                        <p>Utilities and internet included</p>
                                                    </div>
                                                </li>
                                            </ul>
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

export class ContentBlockLiving extends Component {

    render() {
        return (
            <Fragment>
                <section className="about-contents section-padding bg-hb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 contents-wrapper">
                                <div className="contents">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 col-sm-6">
                                            <h1>Every Homebase includes</h1>
                                            <ul className="list-unstyled list-features p-top-15">
                                                <li>
                                                    <div className="list-content">
                                                        <h4>Bed and cozy linens</h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-content">
                                                        <h4>Ultra-fast internet</h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-content">
                                                        <h4>Lush toiletries</h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-content">
                                                        <h4>Plush towels</h4>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-content">
                                                        <h4>Bespoke furniture</h4>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 offset-lg-1 text-right col-sm-6 mt-5 mt-md-0">
                                        <ul className="list-unstyled list-features p-top-15">
                                            <li>
                                                <div className="list-content">
                                                    <h4>Kitchen appliances</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list-content">
                                                    <h4>Cutlery and tableware</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list-content">
                                                    <h4>Designer decor</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list-content">
                                                    <h4>Smart TV (soon)</h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="list-content">
                                                    <h4>Extra outlets</h4>
                                                </div>
                                            </li>
                                        </ul>
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

export class ContentBlockForOwners extends Component {

    render() {
        return (
            <Fragment>
                <section className="about-contents section-padding bg-hb">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 contents-wrapper">
                                <div className="contents" style={{borderColor: '#cccccc'}}>
                                    <div className="row align-items-center">
                                      <div className="col-lg-12">
                                            <h1>Homebase In A Nutshell</h1>
                                            <p>We find customers across multiple channels and vet them to make sure they are the right tenant for the property. We perform all tours and showings and if needed we provide financial help through partners so you can completely furnish your place. Did we mention that we also perform almost all of the property maintenance?</p>
                                      </div>
                                    </div>
                                </div>{/*<!-- ends: .contents -->*/}
                                <div className="contents">
                                    <div className="row align-items-center">
                                        <div className="col-lg-12">
                                            <h1>How does it works?</h1>
                                            <ul className="list-unstyled list-features p-top-15">
                                                <li>
                                                    <div className="list-count"><span style={{backgroundColor: "white"}}>1</span></div>
                                                    <div className="list-content">
                                                        <h4>Due diligence and our Offer within 3-12 hours</h4>
                                                        <p>After you fill out our property submission application, we will do our homework, verify all existing property photos, floorplans and public records.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-count"><span style={{backgroundColor: "white"}}>2</span></div>
                                                    <div className="list-content">
                                                        <h4>On-site visit</h4>
                                                        <p>Our professional team will visit your property to preform measurements, and a physical inspection of the property. This is also a great way for you as a landlord to meet a representative of Homebase, and ask questions about us.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="list-count"><span style={{backgroundColor: "white"}}>3</span></div>
                                                    <div className="list-content">
                                                        <h4>Sign and execute the agreement, furnish and then launch.</h4>
                                                        <p>Homebase will send you an agreement to be signed, which can be done remotely or in person. After picking up a copy of the key and getting access to the property Homebase will ship furniture (if applicable) and launch the new location!</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*<div className="col-lg-6 offset-lg-1 text-right col-sm-6 mt-5 mt-md-0">
                                            <img src="./assets/img/about-img2.png" alt="" />
                                        </div>*/}
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
