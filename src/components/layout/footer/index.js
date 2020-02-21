import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import LogIn from '../../content/element/modal/signIn';
import Register from '../../content/element/modal/signUp';

export class Footer extends Component {

    render() {
        return (
            <Fragment>
                <div className="modal fade show" id="modal-item-remove" tabIndex="-1" role="dialog" style={{display: 'none', paddingRight: '17px'}} aria-modal="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center p-top-40 p-bottom-50">
                                <span className="la la-exclamation-circle color-warning"></span>
                                <h1 className="display-3 m-bottom-10">Are you sure?</h1>
                                <p className="m-bottom-30">Do you really want to delete this item?</p>
                                <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-secondary m-right-15" data-dismiss="modal">Cancel</button>
                                    <button type="button" className="btn btn-danger">Yes, Delete it!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer-dark-hb footer-three footer-grey p-top-95">
                    <div className="footer-top p-bottom-25">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-4 col-sm-6">
                                  <div className="widget widget_text">
                                    <h2 className="widget-title"><NavLink to="/" className="footer-logo"><img src="/assets/img/logo-org.png" alt="" /></NavLink></h2>
                                    <div className="textwidget">
                                        <p>Homebase is a network of fully furnished and ready to move homes.</p>
                                    </div>
                                  </div>{/* ends: .widget */}
                                </div>{/* ends: .col-lg-3 */}

                                <div className="col-lg-2 col-sm-6">
                                    <div className="widget widget_pages">
                                        <h2 className="widget-title">Support</h2>
                                        <ul className="list-unstyled">
                                            <li className="page-item"><NavLink to="/faqs">FAQ</NavLink></li>
                                            <li className="page-item"><NavLink to="/contact">Contact</NavLink></li>
                                            <li className="page-item"><NavLink to="/for-owners">For Owners</NavLink></li>
                                        </ul>
                                    </div>
                                </div>{/* ends: .col-lg-3 */}
                                <div className="col-lg-3 d-flex justify-content-lg-center  col-sm-6">
                                    <div className="widget widget_pages">
                                        <h2 className="widget-title">Legal</h2>
                                        <ul className="list-unstyled">
                                          {/*<li className="page-item"><NavLink to="/about">About Us</NavLink></li>*/}
                                          <li className="page-item"><NavLink to="/privacy">Privacy</NavLink></li>
                                          <li className="page-item"><NavLink to="/terms">Terms</NavLink></li>
                                        </ul>
                                    </div>
                                </div>{/* ends: .col-lg-3 */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget widget_social">
                                        <h2 className="widget-title">Connect with Us</h2>
                                        <ul className="list-unstyled social-list">
                                            <li><a href="https://facebook.com/renthomebase" target="_blank" rel="noopener noreferrer"><span className="facebook"><i className="fab fa-facebook-f" /></span> Facebook</a></li>
                                            <li><a href="https://instagram.com/renthomebase" target="_blank" rel="noopener noreferrer"><span className="instagram"><i className="fab fa-instagram" /></span> Instagram</a></li>
                                            {/*
                                            <li><NavLink to="/gplus"><span className="gplus"><i className="fab fa-google-plus-g" /></span> Google+</NavLink></li>
                                            <li><NavLink to="/mail"><span className="mail"><i className="la la-envelope" /></span> Contact Support</NavLink></li>
                                            <li><NavLink to="/twitter"><span className="twitter"><i className="fab fa-twitter" /></span> Twitter</NavLink></li>
                                            */}
                                        </ul>
                                    </div>{/* ends: .widget */}
                                </div>{/* ends: .col-lg-3 */}
                            </div>
                        </div>
                    </div>{/* ends: .footer-top */}
                </footer>{/* ends: .footer */}
                <Register />
                <LogIn />
            </Fragment>
        )
    }
}
