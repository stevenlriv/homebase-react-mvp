import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
export class BreadcrumbWraper extends Component {

    render() {
        return (
            <Fragment>
                <div className="breadcrumb-wrapper content_above">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1 className="page-title">{this.props.title}</h1>
                                {/*
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                                        <li className="breadcrumb-item active" aria-current="page">{this.props.title}</li>
                                    </ol>
                                </nav>
                                */}
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class BreadcrumbSingle extends Component {

    render() {
        const { category, rating, badge, title, price} = this.props.filter[0];
        return (
            <Fragment>
                <div className="col-lg-8 col-md-7">
                    <ul className="list-unstyled listing-info--badges">
                        <li><span className={"atbd_badge atbd_badge_featured"}>featured</span></li>
                        {/*<li><span className="atbd_badge atbd_badge_popular">Popular</span></li>*/}
                    </ul>
                    <ul className="list-unstyled listing-info--meta">
                        <li>{/**/}
                            <span className="atbd_meta atbd_listing_average_pricing" data-toggle="tooltip" data-placement="top" title="" data-original-title="Monthly Rent">
                                $1200
                            </span>
                        </li>
                        {/*
                        <li>
                            <div className="average-ratings">
                                <span className="atbd_meta atbd_listing_rating">{rating}<i className="la la-star"></i></span>
                                <span><strong>26</strong> Reviews</span>
                            </div>
                        </li>
                        <li>
                            <div className="atbd_listing_category">
                                <a href=" "><span className="la la-glass"></span>{category}</a>
                            </div>
                        </li>*/}
                    </ul>{/*<!-- ends: .listing-info-meta -->*/}
                    <h1>Oasis House</h1>
                    <p className="subtitle">San Juan</p>
                </div>

                {/*
                <div className="col-lg-4 col-md-5 d-flex align-items-end justify-content-start justify-content-md-end">
                    <div className="atbd_listing_action_area">


                        <div className="atbd_action atbd_save">
                            <div className="action_button">
                                <a href=" " onClick={noAction} className="atbdp-favourites"><span className="la la-heart-o"></span> Save</a>
                            </div>
                        </div>

                        <div className="atbd_action atbd_share dropdown">
                            <span className="dropdown-toggle" id="social-links" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="menu">
                                <span className="la la-share"></span>Share
                            </span>
                            <div className="atbd_director_social_wrap dropdown-menu" aria-labelledby="social-links">
                                <ul className="list-unstyled">
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-facebook-f color-facebook"></span>Facebook</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-twitter color-twitter"></span>Twitter</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-pinterest-p color-pinterest"></span>Pinterest</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-google-plus-g color-gplus"></span>Google Plus</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-linkedin-in color-linkedin"></span>LinkedIn</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-tumblr color-tumblr"></span>Tumblr</a>
                                    </li>
                                    <li>
                                        <a onClick={noAction} href=" " target="_blank"><span className="fab fa-vk color-vk"></span>VKontakte</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="atbd_action atbd_report">
                            <div className="action_button">
                                <a href=" " data-toggle="modal" data-target="#atbdp-report-abuse-modal"><span className="la la-flag-o"></span> Report</a>
                            </div>

                        </div>
                    </div>

                </div>*/}

            </Fragment>
        )
    }
}

export class BreadcrumbAbout extends Component {

    render() {

        return (
            <Fragment>
                <div className="about-intro content_above">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <h1>Place your Businessor Explore Anything what you want</h1>
                                <a href="https://www.youtube.com/watch?v=0C4fX_x_Vsg" className="video-iframe play-btn-two">
                                    <span className="icon"><i className="la la-youtube-play"></i></span>
                                    <span>Play our Video</span>
                                </a>
                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
                                <img src="./assets/img/about-illustration.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class BreadcrumbMembership extends Component {

    render() {

        return (
            <Fragment>
                <div className="about-intro content_above">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <h1 style={{color: 'black'}}>Homebase is the new way to live</h1>
                                <p style={{fontSize: '18px'}}>Become a Homebase member and enjoy all the benefits of a fully furnished home, flexible leases, with no chores, or hassles.</p>
                                <br />
                                <h2 style={{color: '#d66d2a'}}>$99 per month</h2>
                                <br />
                                <br />

                                    <NavLink to="/find-a-homebase" className="btn bg-dark-hb">Find Your Homebase Today!</NavLink>

                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
                                {/*<img src="./assets/img/why-homebase.jpg" width="516" height="344" alt="" className="svg" />*/}
                                <img src="./assets/img/membership.jpg" width="540" height="478" alt="" className="svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class BreadcrumbLiving extends Component {

    render() {

        return (
            <Fragment>
                <div className="about-intro content_above">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <h1 style={{color: '#000'}}>With flexible leases, concierge services, and homes that come ready to move-in, Homebase is the new way to live.</h1>
                                <p style={{fontSize: '20px'}}>Our easy approval process means you can have your dream apartment in seconds, no nightmarish paperwork. Fully finished and with stress-free concierge service 24/7.</p>
                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
                                <img src="./assets/img/living.jpg" width="540" height="478" alt="" className="svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export class BreadcrumbForOwners extends Component {

    render() {

        return (
            <Fragment>
                <div className="about-intro content_above">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <h1 style={{color: 'black'}}>Renting with Homebase is more profitable and stress free.</h1>
                                <p style={{fontSize: '18px'}}>Become a Homebase landlord and enjoy all the benefits of our unique property management approach, with no chores, or hassles.</p>
                                <br />
                                <h2 style={{color: '#d66d2a'}}>15-60% premiums on rent</h2>
                                <br />
                                <br />

                                    <NavLink to="/contact" className="btn bg-dark-hb">Start Today!</NavLink>
                            </div>
                            <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
                                <img src="./assets/img/membership.jpg" width="540" height="478" alt="" className="svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
