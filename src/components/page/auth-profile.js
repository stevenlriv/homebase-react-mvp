import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';

const noAction = e => e.preventDefault();

class AuthProfile extends Component {
    render () {
        const user = this.props.user;

        //Array for months names
        let month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        // We proccess the date format to only show month and year
        const date = new Date(user.userAuth.joined);
        let joinedDate = `${month[date.getUTCMonth()]} ${date.getUTCFullYear()}`;

        const light = this.props.logo[0].light;
        const logdIn = () => {
            return this.props.login
        }
        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <BreadcrumbWraper title="Your Profile" />
                </section>
                {/* Header section end */}

                <section className="author-info-area section-padding-strict section-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="atbd_auhor_profile_area">
                                    <div className="atbd_author_avatar">
                                    {
                                        user.userData.profilePicture == '' ? (
                                            <img src="./assets/img/author-profile.jpg" width="120px" height="120px" alt="AuthorImage" />
                                          ) : (
                                            <img src={user.userData.profilePicture} width="120px" height="120px" alt="AuthorImage" />
                                          )
                                      }
                                        <div className="atbd_auth_nd">
                                            <h2>{user.userData.fullName}</h2>
                                            <p>Joined in {joinedDate}</p>
                                        </div>
                                    </div>{/*<!-- ends: .atbd_author_avatar -->*/}
                                    <div className="atbd_author_meta">
                                        <div className="atbd_listing_meta" style={{border: "none"}}>
                                            <NavLink to="/edit-profile" className="atbd_meta atbd_listing_rating">Edit Profile</NavLink>
                                        </div>
                                    </div>{/*<!-- ends: .atbd_author_meta -->*/}
                                </div>{/*<!-- ends: .atbd_auhor_profile_area -->*/}
                            </div>

                            {/* <!-- ends: .col-lg-12 --> */}
                            <div className="col-lg-8 col-md-7 m-bottom-30">
                                <div className="atbd_author_module">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4>Bio</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">

                                            {
                                                user.userData.aboutMe != '' ? (
                                                  <p>{user.userData.aboutMe}</p>
                                                  ) : (
                                                  <p>Add a bio on your homebase dashboard.</p>
                                                  )
                                              }

                                              <br />
                                              {
                                                  user.userData.birthDate != '' || user.userData.gender != '' || user.userData.location != '' || user.userData.school != '' || user.userData.work != '' ? (
                                                    <h3>More details</h3>
                                                    ) : (
                                                      <span></span>
                                                    )
                                              }
                                              <br />
                                              <ul className="list-group list-group-flush">
                                                  {
                                                      user.userData.birthDate != '' ? (
                                                        <li className="list-group-item">
                                                            <span className="la la-birthday-cake"></span>&nbsp;&nbsp;&nbsp;
                                                            <span className="atbd_info">{user.userData.birthDate}</span>
                                                        </li>
                                                        ) : (
                                                          <span></span>
                                                        )
                                                  }

                                                  {
                                                      user.userData.gender != '' ? (
                                                        <li className="list-group-item">
                                                            <span className="la la-user"></span>&nbsp;&nbsp;&nbsp;
                                                            <span className="atbd_info">{user.userData.gender}</span>
                                                        </li>
                                                        ) : (
                                                          <span></span>
                                                        )
                                                  }
                                                  {
                                                      user.userData.location != '' ? (
                                                        <li className="list-group-item">
                                                            <span className="la la-map-marker"></span>&nbsp;&nbsp;&nbsp;
                                                            <span className="atbd_info">{user.userData.location}</span>
                                                        </li>
                                                        ) : (
                                                          <span></span>
                                                        )
                                                  }
                                                  {
                                                      user.userData.school != '' ? (
                                                        <li className="list-group-item">
                                                            <span className="la la-university"></span>&nbsp;&nbsp;&nbsp;
                                                            <span className="atbd_info">{user.userData.school}</span>
                                                        </li>
                                                        ) : (
                                                          <span></span>
                                                        )
                                                  }
                                                  {
                                                      user.userData.work != '' ? (
                                                        <li className="list-group-item">
                                                            <span className="la la-briefcase"></span>&nbsp;&nbsp;&nbsp;
                                                            <span className="atbd_info">{user.userData.work}</span>
                                                        </li>
                                                        ) : (
                                                          <span></span>
                                                        )
                                                  }
                                              </ul>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .atbd_author_module -->*/}
                            </div>{/*<!-- ends: .col-md-8 -->*/}
                            <div className="col-lg-4 col-md-5 m-bottom-30">
                                <div className="widget atbd_widget widget-card">
                                    <div className="atbd_widget_title">
                                        <h4><span className="la la-phone"></span>Contact Info</h4>
                                    </div>{/*<!-- ends: .atbd_widget_title -->*/}
                                    <div className="widget-body atbd_author_info_widget">
                                        <div className="atbd_widget_contact_info">
                                            <ul>
                                              <li>
                                                <span className="la la-envelope"></span>
                                                <span className="atbd_info">{user.userAuth.email}</span>
                                              </li>

                                                {
                                                    user.userData.phoneNumber != '' ? (
                                                      <li>
                                                          <span className="la la-phone"></span>
                                                          <span className="atbd_info">{user.userData.phoneNumber}</span>
                                                      </li>
                                                      ) : (
                                                        <span></span>
                                                      )
                                                  }
                                                  {
                                                      user.userData.linkedIn != '' ? (
                                                        <li>
                                                            <span className="la la-linkedin"></span>
                                                            <span className="atbd_info"><a href={user.userData.linkedIn} target="_blank">LinkedIn</a></span>
                                                        </li>
                                                        ) : (
                                                          <span></span>
                                                        )
                                                    }
                                            </ul>
                                        </div>{/*<!-- ends: .atbd_widget_contact_info -->*/}

                                    </div>{/*<!-- ends: .widget-body -->*/}
                                </div>{/*<!-- ends: .widget -->*/}
                            </div>{/*<!-- ends: .col-lg-4 -->*/}

                            <div className="col-lg-12">
                            </div>
                        </div>
                    </div>
                </section>
               <Footer />
            </Fragment>
        )
    }
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
export default connect(mapStateToProps)(AuthProfile);
