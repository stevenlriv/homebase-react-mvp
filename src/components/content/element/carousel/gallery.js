import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Gallery extends Component {
    render() {
        const { gallery, gallery2, currentListing } = this.props;
        return (
            <Fragment>
                <div className="atbdb_content_module_contents">
                    <div className="gallery-wrapper">
                        <div className="gallery-images">

                        <div className="single-image">
                            <img src={currentListing.imgMain} alt="" style={{width: "100%", maxWidth: "670px"}} />
                        </div>

                        {
                            currentListing.imgAll1 ? (
                              <div className="single-image">
                                  <img src={currentListing.imgAll1} alt="" style={{width: "100%", maxWidth: "670px"}} />
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                        {
                            currentListing.imgAll2 ? (
                              <div className="single-image">
                                  <img src={currentListing.imgAll2} alt="" style={{width: "100%", maxWidth: "670px"}} />
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                        {
                            currentListing.imgAll3 ? (
                              <div className="single-image">
                                  <img src={currentListing.imgAll3} alt="" style={{width: "100%", maxWidth: "670px"}} />
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                        {
                            currentListing.imgAll4 ? (
                              <div className="single-image">
                                  <img src={currentListing.imgAll4} alt="" style={{width: "100%", maxWidth: "670px"}} />
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                        {
                            currentListing.imgAll5 ? (
                              <div className="single-image">
                                  <img src={currentListing.imgAll5} alt="" style={{width: "100%", maxWidth: "670px"}} />
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                        {
                            currentListing.imgAll6 ? (
                              <div className="single-image">
                                  <img src={currentListing.imgAll6} alt="" style={{width: "100%", maxWidth: "670px"}} />
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                        {
                            currentListing.imgAll7 ? (
                              <div className="single-image">
                                  <img src={currentListing.imgAll7} alt="" style={{width: "100%", maxWidth: "670px"}} />
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                        {
                            currentListing.imgAll8 ? (
                              <div className="single-image">
                                  <img src={currentListing.imgAll8} alt="" style={{width: "100%", maxWidth: "670px"}} />
                              </div>
                            ) : (
                              <span></span>
                            )
                        }

                        </div>
                        <div className="gallery-thumbs">

                          <div className="single-thumb" key="1">
                            <img src={currentListing.imgMain} alt="" />
                          </div>

                          {
                              currentListing.imgAll1 ? (
                                <div className="single-thumb">
                                    <img src={currentListing.imgAll1} alt="" />
                                </div>
                              ) : (
                                <span></span>
                              )
                          }

                          {
                              currentListing.imgAll2 ? (
                                <div className="single-thumb">
                                    <img src={currentListing.imgAll2} alt="" />
                                </div>
                              ) : (
                                <span></span>
                              )
                          }

                          {
                              currentListing.imgAll3 ? (
                                <div className="single-thumb">
                                    <img src={currentListing.imgAll3} alt="" />
                                </div>
                              ) : (
                                <span></span>
                              )
                          }

                          {
                              currentListing.imgAll4 ? (
                                <div className="single-thumb">
                                    <img src={currentListing.imgAll4} alt="" />
                                </div>
                              ) : (
                                <span></span>
                              )
                          }

                          {
                              currentListing.imgAll5 ? (
                                <div className="single-thumb">
                                    <img src={currentListing.imgAll5} alt="" />
                                </div>
                              ) : (
                                <span></span>
                              )
                          }

                          {
                              currentListing.imgAll6 ? (
                                <div className="single-thumb">
                                    <img src={currentListing.imgAll6} alt="" />
                                </div>
                              ) : (
                                <span></span>
                              )
                          }

                          {
                              currentListing.imgAll7 ? (
                                <div className="single-thumb">
                                    <img src={currentListing.imgAll7} alt="" />
                                </div>
                              ) : (
                                <span></span>
                              )
                          }

                          {
                              currentListing.imgAll8 ? (
                                <div className="single-thumb">
                                    <img src={currentListing.imgAll8} alt="" />
                                </div>
                              ) : (
                                <span></span>
                              )
                          }

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps =  (state) => {
    return {
        gallery : state.gallery,
        gallery2 : state.gallery2
    }
}
export default connect(mapStateToProps)(Gallery)
