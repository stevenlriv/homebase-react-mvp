import React, {useState, setState, Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';
import { LogOut } from '../../Store/action/logoutAction';

const noAction = e => e.preventDefault();

function AuthDeshbord(props) {
        const user = props.user;

        // State for form fields
        const [fullName, setFullName] = useState(user.userData.fullName);
        const [email, setEmail] = useState(user.userAuth.email);
        const [phone, setPhone] = useState(user.userData.phoneNumber);
        const [linkedIn, setLinkedIn] = useState(user.userData.linkedIn);
        const [birthDate, setBirthDate] = useState(user.userData.birthDate);
        const [location, setLocation] = useState(user.userData.location);
        const [password, setPassword] = useState('');
        const [confirmPassword, setconfirmPassword] = useState('');
        const [about, setAbout] = useState(user.userData.aboutMe);
        let [formError, setError] = useState('');

        const handleFullNameChange = ({ target }) => {
          setFullName(target.value);
        };

        const handleEmailChange = ({ target }) => {
          setEmail(target.value);
        };

        const handlePhoneChange = ({ target }) => {
          setPhone(target.value);
        };

        const handleLinkedInChange = ({ target }) => {
          setLinkedIn(target.value);
        };

        const handleBirthDateChange = ({ target }) => {
          setBirthDate(target.value);
        };

        const handleLocationChange = ({ target }) => {
          setLocation(target.value);
        };

        const handlePasswordChange = ({ target }) => {
          setPassword(target.value);
        };

        const handleconfirmPasswordChange = ({ target }) => {
          setconfirmPassword(target.value);
        };

        const handleAboutChange = ({ target }) => {
          setAbout(target.value);
        };

        //If admin are loggin in take them to the admin panel
        if( user.userData.type == "admin" ) return <Redirect to="/admin-dashboard"  />;

        const logdIn = () => {
            return props.isAuthenticated;
        }
        const light = props.logo[0].light;

        const { dispatch } = props;

        // Profile form submit
        const handleSubmit = (e) => {
          //To prevent modal reload after submission
          e.preventDefault();

          if ( fullName == '' ) {
            setError('Please enter your full name.');
            return;
          }

          if ( email == '' ) {
            setError('An email address is required.');
            return;
          }

          // If the user wants to change the passwod
          if ( password != '' ) {

            // Password needs to be more than 8 characters
            if( password.length < 8 ) {
              setError('Your password needs to be 8 characters or more.');
              return;
            }

            if ( confirmPassword == '' ) {
              setError('Please confirm your password.');
              return;
            }

            if ( password != confirmPassword ) {
              setError('Your passwords does not match.');
              return;
            }

          }

          //dispatch(signUpEmail(fullName, email, password, confirmPassword));

          /*
          if ( signUpError ) {
            setError(signUpError);
            // dont return
          }*/

          //CHANGE FIREBASE Email

          //CHANGE FIREBASE USER PASSWORD

          return;
        }

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
                                                        <a className="nav-link active" id="all-listings" data-toggle="tab" href="#listings" role="tab" aria-controls="listings" aria-selected="true">Current Homebase</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Edit Profile</a>
                                                    </li>
                                                    {/*<li className="nav-item">
                                                        <a className="nav-link" id="faborite-listings" data-toggle="tab" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">Favorite Listing</a>
                                                    </li>*/}
                                                </ul>
                                                <div className="nav_button">
                                                  <NavLink to="/add-listing" className="btn bg-hb-orange bg-hb-dark-hover text-white"><span className="la la-comment"></span> Get in touch with us</NavLink>
                                                  <div className="d-block d-sm-none" style={{marginTop: "10px"}}></div> {/* Mobile space required*/}
                                                  <NavLink to="/" onClick={props.logOut} className="btn bg-dark-hb">Schedule a Homebase cleanup</NavLink>
                                                </div>
                                            </div>
                                        </div>{/*<!-- ends: .col-lg-12 -->*/}
                                    </div>
                                </div>
                            </div>{/*<!-- ends: .dashboard-nav -->*/}
                            <div className="tab-content p-top-100" id="dashboard-tabs-content">
                                <div className="tab-pane fade show active" id="listings" role="tabpanel" aria-labelledby="all-listings">
                                    <div className="container">
                                        <div className="row">
                                            <CardListingGrid4 logdIn={logdIn()} />
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                                <div className="tab-pane fade p-bottom-30" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="container">
                                    {formError && (
                                        <p className="alert alert-danger mx-auto" role="alert">
                                          {formError}
                                        </p>
                                    )}
                                        <div className="row">

                                            <div className="col-lg-3 col-md-4 mb-5 mb-lg-0">
                                                <div className="user_pro_img_area">
                                                {
                                                    user.userData.profilePicture == '' ? (
                                                        <img src="./assets/img/author-profile.jpg" width="120px" height="120px" alt="AuthorImage" />
                                                      ) : (
                                                        <img src={user.userData.profilePicture} width="120px" height="120px" alt="AuthorImage" />
                                                      )
                                                  }
                                                    <div className="image-info">

                                                    </div>
                                                    <div className="custom-file-upload">
                                                        <input type="file" id="customFile" />
                                                        <label htmlFor="customFile" className="btn btn-sm bg-hb-orange bg-hb-dark-hover text-white">Upload New Image</label>
                                                    </div>
                                                    <button className="btn btn-sm bg-dark-hb">Delete Image</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-9 col-md-8">
                                                <div className="atbd_author_module">
                                                    <div className="atbd_content_module">
                                                        <div className="atbd_content_module__tittle_area">
                                                            <div className="atbd_area_title">
                                                                <h4><span className="la la-user"></span>My Profile</h4>
                                                            </div>
                                                        </div>
                                                        <div className="atbdb_content_module_contents">
                                                            <div className="user_info_wrap">
                                                                {/*<!--Full name-->*/}
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="full_name" className="not_empty">Full Name</label>
                                                                            <input onChange={handleFullNameChange} className="form-control" type="text" placeholder="Full name" id="full_name" value={fullName} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="req_email" className="not_empty">Email (required)</label>
                                                                            <input onChange={handleEmailChange} className="form-control" id="req_email" type="text" placeholder="mail@example.com" required="" value={email} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="phone" className="not_empty">Phone Number</label>
                                                                            <input onChange={handlePhoneChange} className="form-control" type="tel" placeholder="Phone number" id="phone" value={phone} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="website" className="not_empty">LinkedIn</label>
                                                                            <input onChange={handleLinkedInChange} className="form-control" id="website" type="text" placeholder="Your LinkedIn profile url" value={linkedIn} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="address" className="not_empty">Birthdate</label>
                                                                            <input onChange={handleBirthDateChange} className="form-control" type="text" placeholder="MM-DD-YYYY" value={birthDate} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="address" className="not_empty">Where do you live?</label>
                                                                            <input onChange={handleLocationChange} className="form-control" type="text" placeholder="Country, City" value={location} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="new_pass" className="not_empty">New Password</label>
                                                                            <input onChange={handlePasswordChange} id="new_pass" className="form-control" type="password" placeholder="Password" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="confirm_pass" className="not_empty">Confirm New Password</label>
                                                                            <input onChange={handleconfirmPasswordChange} id="confirm_pass" className="form-control" type="password" placeholder="Re-enter Password" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label htmlFor="bio" className="not_empty">About Youself</label>
                                                                            <textarea onChange={handleAboutChange} className="wp-editor-area form-control" rows="6" autoComplete="off" id="bio" placeholder="Describe yourself">{about}</textarea>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/*<!--ends social info .row-->*/}
                                                                <button onClick={handleSubmit} type="submit" className="btn bg-hb-orange bg-hb-dark-hover text-white" id="update_user_profile">Save Changes</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{/*<!-- ends: .atbd_author_module -->*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                                <div className="tab-pane fade p-bottom-30" id="favorite" role="tabpanel" aria-labelledby="faborite-listings">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="atbd_saved_items_wrapper">
                                                    <div className="atbd_content_module">
                                                        <div className="atbd_content_module__tittle_area">
                                                            <div className="atbd_area_title">
                                                                <h4><span className="la la-list"></span>My Fovarite Listings</h4>
                                                            </div>
                                                        </div>
                                                        <div className="atbdb_content_module_contents">
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Listing Name</th>
                                                                            <th scope="col">Category</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><NavLink to="/at_demo" onClick={noAction}>Double Broccoli Quinoa</NavLink></td>
                                                                            <td><span className="la la-glass"></span> <NavLink to="/at_demo" onClick={noAction}>Restaurant</NavLink></td>
                                                                            <td><NavLink to="/at_demo" onClick={noAction} className="remove-favorite"><span className="la la-times"></span></NavLink></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><NavLink to="/at_demo" onClick={noAction}>Easy Brazillian Cheese Bread</NavLink></td>
                                                                            <td><span className="la la-glass"></span> <NavLink to="/at_demo" onClick={noAction}>Restaurant</NavLink></td>
                                                                            <td><NavLink to="/at_demo" onClick={noAction} className="remove-favorite"><span className="la la-times"></span></NavLink></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><NavLink to="/at_demo" onClick={noAction}>Hilton Hawaiian Village</NavLink></td>
                                                                            <td><span className="la la-bed"></span> <NavLink to="/at_demo" onClick={noAction}>Hotel</NavLink></td>
                                                                            <td><NavLink to="/at_demo" onClick={noAction} className="remove-favorite"><span className="la la-times"></span></NavLink></td>
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
