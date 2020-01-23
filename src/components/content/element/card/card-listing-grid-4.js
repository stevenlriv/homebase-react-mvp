import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const noAction = e => e.preventDefault();

class ListingCardGrid4 extends Component {

    render() {
        const { list, firebase } = this.props;

          let query = firebase.collection('listings');

          query.limit(3).get().then(querySnapshot => {
            console.log(`Returned first batch of results`);
            let query = querySnapshot.query;
            return query.get();
          }).then(() => {
              console.log(`Returned second batch of results`);
          });

        return (
            <Fragment>
            {
                Object.values(list).slice(0, 3).map((value, key) => {
                    const { img, rating, badge, title, location, price, phone, opCl, id } = value;
                    return (
                        <div className="col-lg-4 col-sm-6" key={key}>
                            <div className="atbd_single_listing ">
                                <article className="atbd_single_listing_wrapper">
                                    <figure className="atbd_listing_thumbnail_area">
                                        <div className="atbd_listing_image">
                                            <NavLink to={"/listing-details"}>
                                                <img src="https://d29jjzkunmbe0r.cloudfront.net/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdE1PIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--08d1fe90a6b563f407e4d0727740f1fb495209e7/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lPTWpRd01IZ3lOREF3QmpvR1JWUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--9bfb88891e7e88cd78df5e1db60bbd52255b3c26/metwest-on-sunset-504-05.jpg" alt="listingimage" />
                                            </NavLink>
                                        </div>{/*<!-- ends: .atbd_listing_image -->*/}
                                    </figure>{/*<!-- ends: .atbd_listing_thumbnail_area -->*/}
                                    <div className="atbd_listing_info">

                                                <div className="atbd_content_upper">
                                                    <div className="atbd_listing_data_list">
                                                        <ul>
                                                            <li>
                                                                <h5>Los Angeles, US</h5>
                                                            </li>
                                                            <li>
                                                                <p className="font-italic"><small>FROM $1500/MO - 1 BED, 1 BATH</small></p>
                                                            </li>
                                                            <li>
                                                                <p>Available Feb 5</p>
                                                            </li>
                                                        </ul>
                                                    </div>{/*<!-- End atbd listing meta -->*/}
                                                </div>

                                                <NavLink to={"/listing-details"}>
                                                  <div className="atbd_listing_bottom_content btn bg-hb-orange bg-hb-dark-hover">
                                                    <h5 className="text-white font-weight-bold" style={ {marginLeft: '115px'} }>Live Here</h5>
                                                  </div>
                                                </NavLink>
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
const mapStateToProps = (state) => {
    return {
        list : state.list,
        firebase: state.firebase
    }
}
export default connect(mapStateToProps)(ListingCardGrid4);
