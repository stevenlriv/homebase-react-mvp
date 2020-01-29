import React, { useState, setState, Fragment } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { connect } from 'react-redux';
import Map1 from '../content/element/map';
import { SectionTitle } from '../content/element/section-title';
import { signUpEmail } from '../../Store/action/signupAction';
import $ from 'jquery';

function SignUp(props) {

  const { signUpError, isAuthenticated } = props;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [terms, setTerms] = useState('');
  let [formError, setError] = useState('');


  const light = props.logo[0].light;

  const handleFullNameChange = ({ target }) => {
    setFullName(target.value);
  };

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleconfirmPasswordChange = ({ target }) => {
    setconfirmPassword(target.value);
  };

  const handleTermsChange = ({ target }) => {
    setTerms(target.value);
  };

  const handleSubmit = (e) => {
    //To prevent modal reload after submission
    e.preventDefault();

    if ( !terms ) {
      setError('To create an account, you need to accept our terms and condition.');
      return;
    }

    if ( fullName == '' ) {
      setError('Please enter your full name.');
      return;
    }

    if ( email == '' ) {
      setError('Please enter your email address.');
      return;
    }

    if ( password == '' ) {
      setError('Please enter your password.');
      return;
    }

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
      setError('Your password does not match.');
      return;
    }

    if ( signUpError ) {
      setError(signUpError);
      // dont return
    }

    const { dispatch } = props;

    dispatch(signUpEmail(fullName, email, password, confirmPassword));

    return;
  };

  // If login send him to his homebase
  if( isAuthenticated ) { return <Redirect to="/my-homebase"  /> }

        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                </section>
                {/* Header section end */}

                    <section className="add-listing-wrapper section-bg border-bottom section-padding-strict">
                        <div className="container">

                        <SectionTitle
                        title="Join our club!"
                        content="Enjoy access to our network of fully furnished homes" />

                            <div className="row">

                            {formError && (
                                <p className="alert alert-danger mx-auto" role="alert">
                                  {formError}
                                </p>
                            )}

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbdb_content_module_contents">
                                            <form action="/" id="signup-form">
                                                <div className="form-group">
                                                    <label htmlFor="full_name" className="form-label">Full Name</label>
                                                    <input onChange={handleFullNameChange} type="text" placeholder="John Doe" id="full_name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input onChange={handleEmailChange} type="email" id="email" className="form-control" placeholder="Enter your best email" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input onChange={handlePasswordChange} type="password" id="password" className="form-control" placeholder="Needs to be 8 characters or more" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                                    <input onChange={handleconfirmPasswordChange} type="password" id="confirm_password" className="form-control" placeholder="Enter your password again" />
                                                </div>

                                            </form>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}


                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="atbd_term_and_condition_area custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                        <input onChange={handleTermsChange} type="checkbox" className="custom-control-input" name="listing_t" value="1" id="listing_t" />
                                        <label htmlFor="listing_t" className="not_empty custom-control-label">I Agree with all <a href="/terms" id="listing_t_c" target="_blank">Terms & Conditions</a></label>
                                    </div>
                                    <div className="btn_wrap list_submit m-top-25">
                                        <button onClick={handleSubmit} type="submit" className="btn bg-dark-hb btn-lg listing_submit_btn">Create Account</button>
                                    </div>
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                            </div>
                        </div>
                    </section>{/*<!-- ends: .add-listing-wrapper -->*/}


               <Footer />
            </Fragment>
        )
}
const mapStateToProps = state => {
    return {
        list: state.list,
        logo: state.logo,
        signUpError: state.users.signupError,
        isAuthenticated: state.userAuth.isAuthenticated
    }
}

export default connect(mapStateToProps)(SignUp);
