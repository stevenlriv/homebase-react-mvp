import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class ListingCardGrid12 extends Component {
    render() {
        const { list } = this.props;
        return (
            <Fragment>
            {
                Object.values(list).map((value, key) => {

                    const actualDate = new Date().getTime();
                    const demoDate = "2020/2/21";

                    //Convert Dates to numbers so we can compare them
                    const demoDateNumber = new Date(demoDate).getTime();

                    const { img, category, icon, rating, badge, title, location, price, phone, opCl, id } = value;
                    return (
                        <div className="col-lg-12" key={key}>
                            <div className="atbd_single_listing atbd_listing_list">
                                <article className="atbd_single_listing_wrapper">
                                    <figure className="atbd_listing_thumbnail_area">
                                        <div className="atbd_listing_image">
                                            <a href="#listing-id">
                                                <img src="https://www.renthomebase.com/wp-content/uploads/2019/11/D70F5381-4E54-46A4-9BFF-17C088FCC75C-scaled.jpeg" style={{width: "100%", maxWidth: "400px"}} alt="listingimage" />
                                            </a>
                                        </div>{/*<!-- ends: .atbd_listing_image -->*/}
                                    </figure>{/*<!-- ends: .atbd_listing_thumbnail_area -->*/}
                                    <div className="atbd_listing_info">
                                        <div className="atbd_content_upper">
                                            <h4 className="atbd_listing_title">
                                                <NavLink to={"/listing-details"}>Oasis House</NavLink>
                                            </h4>
                                            <div className="atbd_listing_meta">
                                                <span className="atbd_meta atbd_listing_price">$1,200</span>
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
                                                        <p><span className="la la-map-marker"></span>1504 Avenida Fernadez Juncos</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="la la-bed"></span><b>2</b> Bedrooms</p>
                                                    </li>
                                                    <li>
                                                        <p><span className="la la-calendar-check-o"></span><b>1</b> Bath</p>
                                                    </li>
                                                </ul>
                                            </div>{/*<!-- End atbd listing meta -->*/}
                                        </div>{/*<!-- end .atbd_content_upper -->*/}
                                        <div className="atbd_listing_bottom_content">
                                            <div className="atbd_content_left">
                                                <NavLink to="/find-a-homebase" className="btn" style={{backgroundColor: "#d66d2a", color: "white"}}>Learn More</NavLink>
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

export default ListingCardGrid12;
