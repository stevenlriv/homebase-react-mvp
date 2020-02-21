import React, { useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { connect } from 'react-redux';
import { SectionTitle } from '../content/element/section-title';
import { myFirebase } from "../../Store/firebase/firebase";

function RecoverPassword(props) {

  const { isAuthenticated } = props;

  const [email, setEmail] = useState('');
  let [formError, setError] = useState('');

  const light = props.logo[0].light;

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handleSubmit = (e) => {
    //To prevent modal reload after submission
    e.preventDefault();

    if ( email === '' ) {
      setError('Please enter your email address.');
      return;
    }

    setError('If thats a valid email, you will receive a new password soon.');

    myFirebase.auth().sendPasswordResetEmail(email)
      .then(function (user) {
        //Success
      }).catch(function (e) {
        //Failed
      })

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
                        title="Recover your password"
                        content="" />

                            <div className="row">

                            {formError && (
                                <p className="alert alert-info mx-auto" role="alert">
                                  {formError}
                                </p>
                            )}

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbdb_content_module_contents">
                                            <form action="/" id="signup-form">

                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input onChange={handleEmailChange} type="email" id="email" className="form-control" placeholder="Enter your email" />
                                                </div>

                                            </form>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}


                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="btn_wrap list_submit m-top-25">
                                        <button onClick={handleSubmit} type="submit" className="btn bg-dark-hb btn-lg listing_submit_btn">Submit</button>
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
        isAuthenticated: state.userAuth.isAuthenticated
    }
}

export default connect(mapStateToProps)(RecoverPassword);
