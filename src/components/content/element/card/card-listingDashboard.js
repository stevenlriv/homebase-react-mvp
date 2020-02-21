import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
const noAction = e => e.preventDefault();
class ListingCardGrid6 extends Component {
    render() {
        const { userHomebase } = this.props;
        return (
            <Fragment>
                            <div className="atbd_single_listing">
                                <article className="atbd_single_listing_wrapper">
                                    <figure className="atbd_listing_thumbnail_area">
                                        <div className="atbd_listing_image">
                                            
                                                <img src={userHomebase.imgMain} alt="listingimage" />

                                        </div>{/*<!-- ends: .atbd_listing_image -->*/}

                                        <div className="atbd_thumbnail_overlay_content">
                                            <ul className="atbd_upper_badge">
                                                <li><span className="text-capitalize atbd_badge atbd_badge_featured">{userHomebase.listingTitle}</span></li>
                                            </ul>{/*<!-- ends .atbd_upper_badge -->*/}
                                        </div>{/*<!-- ends: .atbd_thumbnail_overlay_content -->*/}
                                    </figure>{/*<!-- ends: .atbd_listing_thumbnail_area -->*/}

                                    <div className="atbd_listing_info">
                                    {/*
                                        <div className="atbd_content_upper">
                                            <h4 className="atbd_listing_title">
                                                <NavLink to={"/listing-details"}>{userHomebase.listingTitle}</NavLink>
                                            </h4>

                                                    <div className="atbd_listing_meta">
                                                        <span className="atbd_meta atbd_listing_rating">4.6<i className="la la-star"></i></span>
                                                        <span className="atbd_meta atbd_listing_price">{"$ "+userHomebase.monthlyRentFullHouse}</span>
                                                        <span className="atbd_meta atbd_badge_">Nowdd</span>
                                                    </div>


                                            <div className="atbd_listing_data_list">
                                                <ul>
                                                    <li>
                                                        <p><span className="la la-map-marker"></span>LOCATION</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="la la-phone"></span>PHONE</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="la la-calendar-check-o"></span>Lease ends on: <b>[dateLeaseEnds]</b></p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="atbd_listing_bottom_content">
                                            <div className="atbd_content_left">
                                                <div className="atbd_listing_category">
                                                    <a href=" "><span className="la "></span>CATEGORY</a>
                                                </div>
                                            </div>
                                            <ul className="atbd_content_right">
                                                <li className="atbd_count"><span className="la la-eye"></span>900+</li>
                                                <li className="atbd_save">
                                                    <span className="la la-heart-o"></span>
                                                </li>
                                            </ul>
                                        </div>*/}
                                    </div>{/*<!-- ends: .atbd_listing_info -->*/}
                                </article>{/*<!-- atbd_single_listing_wrapper -->*/}
                            </div>
            </Fragment>
        )
    }
}

export default ListingCardGrid6;
