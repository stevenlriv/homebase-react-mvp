import React, { useState, setState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { loginEmail } from '../../../../Store/action/loginAction';
import $ from 'jquery';

function Login(props) {

  const { loginError, isAuthenticated } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let [formError, setError] = useState('');

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const handleSubmit = (e) => {
    //To prevent modal reload after submission
    e.preventDefault();

    if ( email == '' ) {
      setError('Please enter your email address.');
      return;
    }

    if ( password == '' ) {
      setError('Please enter your password.');
      return;
    }

    if ( loginError ) {
      setError('Incorrect email or password.');
      // dont return
    }

    const { dispatch } = props;

    dispatch(loginEmail(email, password));

    return;
  };

  if (isAuthenticated) {
    //To close the modal after successful login
    $("#login_modal").click();
  }

        return (
            <Fragment>
                <div className="modal fade" id="login_modal" tabIndex={-1} role="dialog" aria-labelledby="login_modal_label" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="login_modal_label"><i className="la la-lock" /> Sign In</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">

                            {formError && (
                                <p className="alert alert-danger" role="alert">
                                  {formError}
                                </p>
                            )}

                                <form action="/" id="login-form">
                                    <input onChange={handleEmailChange} type="email" className="form-control" placeholder="Email" required />

                                    <input onChange={handlePasswordChange} type="password" className="form-control" placeholder="Password" required />

                                    <button onClick={handleSubmit} type="submit" className="btn btn-block btn-lg bg-dark-hb font-weight-bold">SIGN IN</button>
                                </form>
                                <div className="form-excerpts">
                                    <ul className="list-unstyled">
                                        <li>Not a member? <NavLink to="/sign-up">Sign up</NavLink></li>
                                        <li><NavLink to='/recover-password'>Recover Password</NavLink></li>
                                    </ul>
                                    <div className="social-login">
                                    <span>Or connect with</span>
                                    <p>
                                        <NavLink to="/at_demo" className="btn btn-outline-secondary">
                                            <i className="fab fa-facebook-f" /> Facebook
                                        </NavLink>
                                        <NavLink to="/at_demo" className="btn btn-outline-danger">
                                            <i className="fab fa-google" /> Google
                                        </NavLink>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
}

const mapStateToProps = state => {
    return {
        isLoggingIn: state.userAuth.isLoggingIn,
        loginError: state.userAuth.loginError,
        isAuthenticated: state.userAuth.isAuthenticated
    }
}

export default connect(mapStateToProps)(Login);
