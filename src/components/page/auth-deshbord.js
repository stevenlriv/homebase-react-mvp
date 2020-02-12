import React, {useState, setState, Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';
import { LogOut } from '../../Store/action/logoutAction';
import { updateProfile, updateProfilePicture } from '../../Store/action/profileAction';
import {storage} from "../../Store/firebase/firebase";

const noAction = e => e.preventDefault();

function AuthDeshbord(props) {
        const user = props.user;

        const logdIn = () => {
            return props.isAuthenticated;
        }
        const light = props.logo[0].light;

        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <BreadcrumbWraper title="Your Homebase" />
                </section>
                {/* Header section end */}

                {
                    logdIn() !== null ? (
                        <section className="dashboard-wrapper section-bg p-bottom-70">

                            <div className="dashboard-nav">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="dashboard-nav-area">
                                                <ul className="nav" id="dashboard-tabs" role="tablist">
                                                {/*
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="all-listings" data-toggle="tab" href="#listings" role="tab" aria-controls="listings" aria-selected="true">Current Homebase</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Edit Profile</a>
                                                    </li>*/}
                                                    {/*<li className="nav-item">
                                                        <a className="nav-link" id="faborite-listings" data-toggle="tab" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">Favorite Listing</a>
                                                    </li>*/}
                                                </ul>
                                                {/*
                                                <div className="nav_button">
                                                  <NavLink to="/add-listing" className="btn bg-hb-orange bg-hb-dark-hover text-white"><span className="la la-comment"></span> Get in touch with us</NavLink>
                                                  <div className="d-block d-sm-none" style={{marginTop: "10px"}}></div>
                                                  <NavLink to="/" onClick={props.logOut} className="btn bg-dark-hb">Schedule a Homebase cleanup</NavLink>
                                                </div>
                                                */}
                                            </div>
                                        </div>{/*<!-- ends: .col-lg-12 -->*/}
                                    </div>
                                </div>
                            </div>{/*<!-- ends: .dashboard-nav -->*/}



                            <div className="tab-content p-top-100" id="dashboard-tabs-content">
                                <div className="tab-pane fade show active" id="listings" role="tabpanel" aria-labelledby="all-listings">
                                    <div className="container">
                                        <div className="row">

                                            {/* Current Homebase */}
                                            {/*<CardListingGrid4 logdIn={logdIn()} />*/}
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}

                            </div>
                        </section>
                    ) : (
                        <section className="dashboard-wrapper section-bg p-bottom-70 p-top-70">
                            <div className="container">
                                <div className="alert alert-danger" role="alert">
                                    Please login First..............!
                                </div>
                            </div>
                        </section>
                    )
                }

               <Footer />
            </Fragment>
        )
}
const mapStateToProps = state => {
    return {
        user: state.userAuth.user,
        isAuthenticated: state.userAuth.isAuthenticated,
        list: state.list,
        login : state.login,
        logo: state.logo
    }
}
const mapDispatchToProp = dispatch => {
    return {
        logOut : () => dispatch(LogOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(AuthDeshbord);
