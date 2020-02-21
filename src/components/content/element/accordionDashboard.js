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
