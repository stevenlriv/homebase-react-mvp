import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { connect } from "react-redux";
import { BreadcrumbSingle } from '../content/element/breadcrumb';
import { ContentStory } from '../content/element/listing-details-story';
import Gallery from '../content/element/carousel/gallery';
import { ListingFetures } from '../content/element/listing-fetures';
import { Video, Video2 } from '../content/element/video';
import Map1 from '../content/element/map';
import { ContactInfo } from '../content/element/contact-info';
import { Accordion } from '../content/element/accordion';
import { Review, AddReview } from '../content/element/review';
import { SellerInfo, BusinessInfo, CategoryWithIcon, TagStyle, SimilarListing, PopularListing } from '../content/element/widget';

import { NavLink, Redirect } from 'react-router-dom';
import { ContactForm } from '../content/element/contact-form';
import Report from '../content/element/modal/report';
import Clime from '../content/element/modal/clime-list';
import { getListings } from '../../Store/action/getListingsActions';

const noAction = e => e.preventDefault();

let loadOnce = false;

const ListingDetails = (props) => {
    const light = props.logo[0].light;
    const id = props.match.params.id;

    // We only load it once every lifecicly of component
    if ( !loadOnce ) {
      loadOnce = true;
      //console.log('We load it just once');
      props.getListing(id);
    }

    const currentListing = props.listing;

    const filter = Object.values(props.list).filter((value) => {
        return value.id === 1;
    })

    // If there is no listing to show, show an error
    if( currentListing == undefined )
      return <Redirect to="/not-found"  />;


    return (
        <Fragment>
            {/* Header section start */}
            <section className="listing-details-wrapper bgimage">
                <div className="bg_image_holder"><img src="./assets/img/details-img.jpg" alt="" />

                </div>
                <div className="mainmenu-wrapper">
                    <Header logo={light} class="menu--light" />
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <div className="listing-info content_above">
                    <div className="container">
                        <div className="row">
                            <BreadcrumbSingle currentListing={currentListing} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Header section end */}
            <section className="directory_listiing_detail_area single_area section-bg section-padding-strict">

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">



                        {/* FOR PHONES */}
                        {
                            currentListing.bookTourLink ? (
                              <div className="widget atbd_widget widget_claim_listing d-block d-sm-block d-lg-none d-xl-none">
                                <a href={currentListing.bookTourLink} target="_blank" rel="noopener noreferrer" className="btn btn-block btn-lg font-weight-bold" style={{backgroundColor: "#d66d2a", color: "white"}}>Book a Tour</a>
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                            <div className="widget atbd_widget widget_claim_listing d-block d-sm-block d-lg-none d-xl-none">
                              <NavLink to="/contact" className="btn btn-block btn-lg bg-dark-hb font-weight-bold">Contact Us</NavLink>
                            </div>{/*<!-- ends: .widget -->*/}

                            <div className="atbd_content_module atbd_listing_gallery">
                                <div className="atbd_content_module__tittle_area">
                                    <div className="atbd_area_title">
                                        <h4><span className="la la-image"></span>Pictures</h4>
                                    </div>
                                </div>
                                <Gallery currentListing={currentListing} />
                            </div>
                            {/* Gallery end */}

                            <ContentStory currentListing={currentListing} />

                            {
                                currentListing.videoTour ? (
                                  <div className="atbd_content_module atbd_custom_fields_contents">
                                      <div className="atbd_content_module__tittle_area">
                                          <div className="atbd_area_title">
                                              <h4><span className="la la-youtube-play"></span>Video Tour</h4>
                                          </div>
                                      </div>
                                      <Video currentListing={currentListing} />
                                  </div>
                                ) : (
                                  <span></span>
                                )
                            }

                            {/*

                            <div className="atbd_content_module">
                                <div className="atbd_content_module__tittle_area">
                                    <div className="atbd_area_title">
                                        <h4><span className="la la-map-o"></span>Location</h4>
                                    </div>
                                </div>
                                <div className="atbdb_content_module_contents">
                                    <div className="map" id="map-one" style={{position: 'relative'}}>
                                        <Map1 currentListing={currentListing} />
                                    </div>
                                </div>
                            </div>
                            */}
                            {/* Map end */}

                            <div>
                              {/*Space Needed For Mobile and Small device*/}
                            </div>

                        </div>

                        <div className="col-lg-4">

                        {
                            currentListing.bookTourLink ? (
                              <div className="widget atbd_widget widget_claim_listing d-none d-lg-block d-xl-block">
                                <a href={currentListing.bookTourLink} target="_blank" rel="noopener noreferrer" className="btn btn-block btn-lg font-weight-bold" style={{backgroundColor: "#d66d2a", color: "white"}}>Book a Tour</a>
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                            <div className="widget atbd_widget widget_claim_listing d-none d-lg-block d-xl-block">
                              <NavLink to="/contact" className="btn btn-block btn-lg bg-dark-hb font-weight-bold">Contact Us</NavLink>
                            </div>{/*<!-- ends: .widget -->*/}

                            {/*<BusinessInfo />*/}


                            <CategoryWithIcon currentListing={currentListing} />

                        </div>
                    </div>
                </div>
            </section>
           <Report />
           <Clime />
           <Footer />
        </Fragment>
    )
}
const mapStateToProps = (state) => {

    return {
        list : state.list,
        logo: state.logo,
        listing: state.theListings.listing
    }
}

const mapDispatchToProp = dispatch => {
    return {
        getListing: (uri) => dispatch(getListings(uri))
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(ListingDetails);
