import React, {useState, Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogOut } from '../../Store/action/logoutAction';
import { SectionTitle } from '../content/element/section-title';
import Accordion from '../content/element/accordionDashboard';
import ListingCardGrid6 from '../content/element/card/card-listingDashboard';
import { db } from '../../Store/firebase/firebase';

function AuthDeshbord(props) {
        const user = props.user;

        const [userHomebase, setuserHomebase] = useState('');
        const [leaseData, setleaseData] = useState('');

        // Verify if the user is an admin, if not reddirect away
        if( user.userData.type === "admin" ) return <Redirect to="/admin-dashboard"  />;

        const logdIn = () => {
            return props.isAuthenticated;
        }
        const light = props.logo[0].light;

        /////////////////////////////////////////////////////////////
        //Lets get the user listing
        //First lest get the lease data
        let leaseRef = db.collection("lease").doc(user.userData.leaseId);
        leaseRef.get()
          .then(doc => {
            if (doc.exists) {
              setleaseData(doc.data());
            }
        })
        .catch(err => {
        });

        //Then lets get the user homebase
        let listingRef = db.collection("listings").doc("5I0sRxaOLwFpPnZavEdT");
        listingRef.get()
          .then(doc => {
            if (doc.exists) {
              setuserHomebase(doc.data());
            }
        })
        .catch(err => {
        });
        ////////////////////////////////////////////////

        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <BreadcrumbWraper title="Your Homebase" />
                </section>
                {/* Header section end */}

                {
                    logdIn() !== null ? (
                        <section className="dashboard-wrapper section-bg p-bottom-70">

                            <div className="dashboard-nav">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="dashboard-nav-area">
                                                <ul className="nav" id="dashboard-tabs" role="tablist">

                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="all-listings" data-toggle="tab" href="#listings" role="tab" aria-controls="listings" aria-selected="true">Your Homebase</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="all-contractors" data-toggle="tab" href="#contractor-list" role="tab" aria-controls="profile" aria-selected="false">Need help? Ask our contractors</a>
                                                    </li>
                                                    {/*<li className="nav-item">
                                                        <a className="nav-link" id="faborite-listings" data-toggle="tab" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">Favorite Listing</a>
                                                    </li>*/}
                                                </ul>
                                                {/*
                                                <div className="nav_button">
                                                  <NavLink to="/add-listing" className="btn bg-hb-orange bg-hb-dark-hover text-white"><span className="la la-comment"></span> Get in touch with us</NavLink>
                                                  <div className="d-block d-sm-none" style={{marginTop: "10px"}}></div>
                                                  <NavLink to="/" onClick={props.logOut} className="btn bg-dark-hb">Schedule a Homebase cleanup</NavLink>
                                                </div>
                                                */}
                                            </div>
                                        </div>{/*<!-- ends: .col-lg-12 -->*/}
                                    </div>
                                </div>
                            </div>{/*<!-- ends: .dashboard-nav -->*/}



                            <div className="tab-content p-top-100" id="dashboard-tabs-content">
                                <div className="tab-pane fade show active" id="listings" role="tabpanel" aria-labelledby="all-listings">
                                    <div className="container">
                                        <div className="row">

                                        {
                                            user.userData.leaseId !== '' ? (
                                              <div className="col-lg-12">

                                                <div className="col-lg-11">
                                                  <ListingCardGrid6 userHomebase={userHomebase} />
                                                </div>

                                                <div className="col-lg-11">
                                                  <div className="faq-contents">
                                                    <div className="atbd_content_module atbd_faqs_module">
                                                      <Accordion userHomebase={userHomebase} leaseData={leaseData} />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            ) : (

                                            <div className="col-lg-12">
                                              <p className="alert alert-danger mx-auto" role="alert">
                                                <p>Currently, there is no Homebase assigned to your account, if you believe this to be an error, contact us and we will fix it right away.</p>
                                              </p>
                                            </div>

                                          )
                                        }

                                            {/* Current Homebase */}
                                            {/*<CardListingGrid4 logdIn={logdIn()} />*/}
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}

                                <div className="tab-pane fade p-bottom-30 show" id="contractor-list" role="tabpanel" aria-labelledby="faborite-listings">
                                    <div className="container">
                                        <div className="row">

                                        <div className="col-lg-12">
                                          <p className="alert alert-warning mx-auto" role="alert">
                                            <p>As a Homebase member, you get access to our trusted contractors and vendors, in case you need help during your stay.</p>
                                          </p>
                                        </div>

                                          <div className="col-lg-12">
                                              <div className="atbd_saved_items_wrapper">
                                                  <div className="atbd_content_module">
                                                      <div className="atbd_content_module__tittle_area">
                                                          <div className="atbd_area_title">
                                                              <h4><span className="la la-clipboard"></span>How does it work?</h4>
                                                          </div>
                                                      </div>
                                                      <div className="atbdb_content_module_contents">
                                                          <div className="table-responsive">
                                                              <table className="table">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td style={{textAlign: 'left'}}> <b>Step 1.</b> See from which contractor you need help </td>
                                                                      </tr>

                                                                      <tr>
                                                                          <td style={{textAlign: 'left'}}> <b>Step 2.</b> Call them and explain the situation, be as specific as posible</td>
                                                                      </tr>

                                                                      <tr>
                                                                          <td style={{textAlign: 'left'}}> <b>Step 3.</b> Send by message your homebase phisical address (or Google Maps pin)</td>
                                                                      </tr>

                                                                      <tr>
                                                                          <td style={{textAlign: 'left'}}> <b>Step 4.</b> After the contractor finish their job, <b>HE WILL BILL YOU</b>. Don't worry our contractors are trusted person and their prices are as great as it can get.</td>
                                                                      </tr>

                                                                      <tr>
                                                                          <td style={{textAlign: 'left'}}> <b>Step 5.</b> If its something related to wear and tear, we will refund you, just contact us to see if you qualify for a refund.</td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </div>
                                                      </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                                  </div>
                                              </div>{/*<!--  ends: .atbd_saved_items_wrapper -->*/}
                                          </div>{/*<!-- ends: .col-lg-12 -->*/}

                                          <div className="col-lg-12">
                                            <p style={{marginBottom: "25px"}}></p>
                                          </div>

                                            <div className="col-lg-12">
                                                <div className="atbd_saved_items_wrapper">
                                                    <div className="atbd_content_module">
                                                        <div className="atbd_content_module__tittle_area">
                                                            <div className="atbd_area_title">
                                                                <h4><span className="la la-list"></span>Homebase Trusted Contractors</h4>
                                                            </div>
                                                        </div>
                                                        <div className="atbdb_content_module_contents">
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Job</th>
                                                                            <th scope="col">Name</th>
                                                                            <th scope="col">Phone Number</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>House Cleaning</td>
                                                                            <td><b>Mabel</b></td>
                                                                            <td style={{textAlign: 'left'}}> <a href="tel:939-284-9477" style={{color: '#d66d2a'}}>939-284-9477</a></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>Handyman & Plummer</td>
                                                                            <td><b>Junior</b></td>
                                                                            <td style={{textAlign: 'left'}}> <a href="tel:787-228-9800" style={{color: '#d66d2a'}}>787-228-9800</a></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                                    </div>
                                                </div>{/*<!--  ends: .atbd_saved_items_wrapper -->*/}
                                            </div>{/*<!-- ends: .col-lg-12 -->*/}
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}

                            </div>
                        </section>
                    ) : (
                        <section className="dashboard-wrapper section-bg p-bottom-70 p-top-70">
                            <div className="container">
                                <div className="alert alert-danger" role="alert">
                                    Please login First..............!
                                </div>
                            </div>
                        </section>
                    )
                }

               <Footer />
            </Fragment>
        )
}
const mapStateToProps = state => {
    return {
        user: state.userAuth.user,
        isAuthenticated: state.userAuth.isAuthenticated,
        list: state.list,
        login : state.login,
        logo: state.logo
    }
}
const mapDispatchToProp = dispatch => {
    return {
        logOut : () => dispatch(LogOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProp)(AuthDeshbord);
