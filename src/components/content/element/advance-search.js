import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
export class AdvSearch extends Component {

    render() {
        return (
            <Fragment>
                <div className="directory_content_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="search_title_area">
                                    <h2 className="title">Fully furnished homes. Flexible duration.</h2>
                                    <p className="sub_title">Homebase is a network of homes where everything is done for you. All you have to do is enjoy your life!</p>
                                </div>{/* ends: .search_title_area */}
                                <form action="/" className="search_form">
                                    <div className="atbd_seach_fields_wrapper">
                                        <div className="single_search_field search_category">
                                            <select className="search_fields" id="at_biz_dir-category">
                                            <option value>Choose a City</option>
                                            <option value="automobile">San Juan</option>
                                            <option value="education">San Francisco</option>
                                            <option value="event">Chile</option>
                                            </select>
                                        </div>
                                        
                                        <div className="single_search_field search_location">
                                            <select className="search_fields" id="at_biz_dir-location">
                                            <option value>Move in date</option>
                                            <option value="ab">AB Simple</option>
                                            <option value="australia">Australia</option>
                                            <option value="australia-australia">Australia</option>
                                            </select>
                                        </div>

                                        <div className="atbd_submit_btn">
                                            <button type="submit" onClick={noAction} className="btn btn-block bg-dark-hb btn-md btn_search">Find my Homebase</button>
                                        </div>
                                    </div>
                                </form>{/* ends: .search_form */}
                            </div>{/* ends: .col-lg-10 */}
                        </div>
                    </div>
                </div>{/* ends: .directory_search_area */}
            </Fragment>
        )
    }
}
