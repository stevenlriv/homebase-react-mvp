import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import slugify from "../../../other/clean-url";

class ListingCardGrid12 extends Component {
    render() {
        const { list } = this.props;
        return (
            <Fragment>
            {
                Object.values(this.props.allListings).map((value, key) => {
                    const { imgMain, citiesCategory, listingTitle, availabilityDate, monthlyRentFullHouse, numberBathrooms, numberBedrooms, physicalAddress, uri } = value;

                    const actualDate = new Date().getTime();
                    const demoDate = availabilityDate;

                    //URL to listing
                    const cleanCity = slugify(citiesCategory);
                    const urlList = `/${cleanCity}/${uri}`;

                    //Convert Dates to numbers so we can compare them
                    const demoDateNumber = new Date(demoDate).getTime();

                    return (
                        <div className="col-lg-12" key={key}>
                            <div className="atbd_single_listing atbd_listing_list">
                                <article className="atbd_single_listing_wrapper">
                                    <figure className="atbd_listing_thumbnail_area">
                                        <div className="atbd_listing_image">
                                            <a href={urlList}>
                                                <img src={imgMain} style={{width: "100%", maxWidth: "400px"}} alt="listingimage" />
                                            </a>
                                        </div>{/*<!-- ends: .atbd_listing_image -->*/}
                                    </figure>{/*<!-- ends: .atbd_listing_thumbnail_area -->*/}
                                    <div className="atbd_listing_info">
                                        <div className="atbd_content_upper">
                                            <h4 className="atbd_listing_title">
                                                <NavLink to={urlList}>{listingTitle}</NavLink>
                                            </h4>
                                            <div className="atbd_listing_meta">
                                                <span className="atbd_meta atbd_listing_price">${monthlyRentFullHouse}</span>
                                                {
                                                    actualDate > demoDateNumber ? (
                                                      <span className={"atbd_meta atbd_badge_open"}>Available Now</span>
                                                    ) : (
                                                      <span className={"atbd_meta atbd_badge_close"}>Available On {demoDate}</span>
                                                    )
                                                }

                                            </div>{/*<!-- End atbd listing meta -->*/}
                                            <div className="atbd_listing_data_list">
                                                <ul>
                                                    <li>
                                                        <p><span className="la la-map-marker"></span>{physicalAddress}</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="la la-bed"></span><b>{numberBedrooms}</b> Bedrooms</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="la la-calendar-check-o"></span><b>{numberBathrooms}</b> Bath</p>
                                                    </li>
                                                </ul>
                                            </div>{/*<!-- End atbd listing meta -->*/}
                                        </div>{/*<!-- end .atbd_content_upper -->*/}
                                        <div className="atbd_listing_bottom_content">
                                            <div className="atbd_content_left">
                                                <NavLink to={urlList} className="btn" style={{backgroundColor: "#d66d2a", color: "white"}}>Learn More</NavLink>
                                            </div>
                                            <ul className="atbd_content_right">
                                                <li className="atbd_count"><span className="la la-eye"></span>{Math.floor(Math.random() * 10)}+</li>
                                            </ul>
                                        </div>{/*<!-- end .atbd_listing_bottom_content -->*/}
                                    </div>{/*<!-- ends: .atbd_listing_info -->*/}
                                </article>{/*<!-- atbd_single_listing_wrapper -->*/}
                            </div>
                        </div>

                    )
                })
            }
            </Fragment>
        )
    }
}

const mapStateToProps =  (state) => {
    return {
        list : state.list,
        listings: state.listings,
        allListings: state.theListings.allListings
    }
}
export default connect(mapStateToProps)(ListingCardGrid12);
