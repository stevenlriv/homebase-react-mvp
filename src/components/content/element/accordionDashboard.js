import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const noAction = e => e.preventDefault();
function Accordion(props) {

        const userHomebase = props.userHomebase;
        const leaseData = props.leaseData;

        return (
            <Fragment>
                <div className="atbdb_content_module_contents">
                    <div className="atbdp-accordion">

                    <div className="accordion-single">
                        <h3 className="faq-title"><a href="#summary">Your Homebase</a></h3>
                        <p className="ac-body" style={{display: 'block'}}>
                          <ul>
                            <li><b>Electricity:</b> {userHomebase.electricity ? "Included" : "Not Included"}</li>
                            <li><b>Water:</b> {userHomebase.water ? "Included" : "Not Included"}</li>
                            <li><b>Fully Furnished:</b> {userHomebase.furnished ? "Yes" : "No"}</li>
                            <li><b>Air Conditioner:</b> {userHomebase.airConditioning ? "Yes" : "No"}</li>

                            <li><b>Pets Allowed:</b> {userHomebase.pets ? "Yes" : "No"}</li>
                            <li><b>Smoking Allowed:</b> {userHomebase.smoking ? "Yes" : "No"}</li>
                            <li><b>Parking Available:</b> {userHomebase.parking ? "Yes" : "No"}</li>
                          </ul>
                        </p>
                    </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><a href="#lease">Your Homebase Lease</a></h3>
                            <p className="ac-body" style={{display: 'block'}}>
                              <ul>
                                <li><b>Lease Ending Date:</b> {leaseData.leaseEndingDate}</li>
                                <li><b>Monthly Payment:</b> ${leaseData.monthlyPaymentDue}</li>
                                <li><b>Paid Deposit:</b> ${leaseData.paidDepositAmount}</li>
                              </ul>
                            </p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><a href="#addrs">Your Homebase Physical Address</a></h3>
                            <p className="ac-body" style={{display: 'none'}}>
                              <ul>
                                <li><b>Address:</b> {userHomebase.physicalAddress}</li>
                                <li><b>City:</b> {userHomebase.citiesCategory}</li>
                                <li><b>State:</b> {userHomebase.state}</li>
                                <li><b>Country:</b> {userHomebase.country}</li>
                                <li><b>Zip Code:</b> {userHomebase.zipCode}</li>
                              </ul>
                            </p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><a href="#checkin">Your Homebase Check In Instructions</a></h3>
                            <p className="ac-body" style={{display: 'none'}}>

                              {/* Check In Description #1 */}
                              <div>
                              {
                                  userHomebase.checkInImg1 ? (
                                    <p><img src={userHomebase.checkInImg1} style={{width: "100%", maxWidth: "600px"}} /></p>
                                  ) : (
                                    <span></span>
                                  )
                              }

                              {
                                  userHomebase.checkInPinCode ? (
                                    <p><b>PIN CODE: </b> {userHomebase.checkInPinCode}</p>
                                  ) : (
                                    <span></span>
                                  )
                              }

                                <p><br />{userHomebase.checkInDescription1}</p>

                              </div>
                              {/* ENDS Check In Description #1 */}

                              {/* Check In Description #2 */}
                              <div>
                              {
                                  userHomebase.checkInImg2 ? (
                                    <p><br />
                                    <img src={userHomebase.checkInImg2} style={{width: "100%", maxWidth: "600px"}} /></p>
                                  ) : (
                                    <span></span>
                                  )
                              }

                              {
                                  userHomebase.checkInDescription2 ? (
                                    <p><br />{userHomebase.checkInDescription2}</p>
                                  ) : (
                                    <span></span>
                                  )
                              }
                              </div>
                              {/* ENDS Check In Description #2 */}

                              {/* Check In Description #3 */}
                              <div>
                              {
                                  userHomebase.checkInImg3 ? (
                                    <p><br />
                                    <img src={userHomebase.checkInImg3} style={{width: "100%", maxWidth: "600px"}} /></p>
                                  ) : (
                                    <span></span>
                                  )
                              }

                              {
                                  userHomebase.checkInDescription3 ? (
                                    <p><br />{userHomebase.checkInDescription3}</p>
                                  ) : (
                                    <span></span>
                                  )
                              }
                              </div>
                              {/* ENDS Check In Description #3 */}

                              {/* Check In Description #4 */}
                              <div>
                              {
                                  userHomebase.checkInImg4 ? (
                                    <p><br />
                                    <img src={userHomebase.checkInImg4} style={{width: "100%", maxWidth: "600px"}} /></p>
                                  ) : (
                                    <span></span>
                                  )
                              }

                              {
                                  userHomebase.checkInDescription4 ? (
                                    <p><br />{userHomebase.checkInDescription4}</p>
                                  ) : (
                                    <span></span>
                                  )
                              }
                              </div>
                              {/* ENDS Check In Description #4 */}

                              {/* Check In Description #5 */}
                              <div>
                              {
                                  userHomebase.checkInImg5 ? (
                                    <p><br />
                                    <img src={userHomebase.checkInImg5} style={{width: "100%", maxWidth: "600px"}} /></p>
                                  ) : (
                                    <span></span>
                                  )
                              }

                              {
                                  userHomebase.checkInDescription5 ? (
                                    <p><br />{userHomebase.checkInDescription5}</p>
                                  ) : (
                                    <span></span>
                                  )
                              }
                              </div>
                              {/* ENDS Check In Description #5 */}

                              {/* Check In Description #6 */}
                              <div>
                              {
                                  userHomebase.checkInImg6 ? (
                                    <p><br />
                                    <img src={userHomebase.checkInImg6} style={{width: "100%", maxWidth: "600px"}} /></p>
                                  ) : (
                                    <span></span>
                                  )
                              }

                              {
                                  userHomebase.checkInDescription6 ? (
                                    <p><br />{userHomebase.checkInDescription6}</p>
                                  ) : (
                                    <span></span>
                                  )
                              }
                              </div>
                              {/* ENDS Check In Description #6 */}

                            </p>
                        </div>

                        {
                            userHomebase.wifi ? (

                              <div className="accordion-single">
                                  <h3 className="faq-title"><a href="#wifi">Your Homebase WIFI Details</a></h3>
                                  <p className="ac-body" style={{display: 'none'}}>
                                    <ul>
                                      <li><b>WIFI SSID:</b> {userHomebase.wifiSSID}</li>
                                      <li><b>WIFI Password:</b> {userHomebase.wifiPassword}</li>
                                    </ul>
                                  </p>
                              </div>


                              ) : (
                                <span></span>
                              )
                        }
                    </div>
                </div>
            </Fragment>
        )
}

const mapStateToProps = state => {
    return {
    }
}

export default connect(mapStateToProps)(Accordion);
