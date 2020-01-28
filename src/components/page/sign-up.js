import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { connect } from 'react-redux';
import Map1 from '../content/element/map';
import { SectionTitle } from '../content/element/section-title';
class SignUp extends Component {

    render () {
        const light = this.props.logo[0].light;
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

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbdb_content_module_contents">
                                            <form action="/">
                                                <div className="form-group">
                                                    <label htmlFor="full_name" className="form-label">Full Name</label>
                                                    <input type="text" placeholder="John Doe" id="full_name" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input type="email" id="email" className="form-control" placeholder="Enter your best email" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input type="password" id="password" className="form-control" placeholder="Needs to be more than 8 characters" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                                                    <input type="password" id="confirm_password" className="form-control" placeholder="" />
                                                </div>

                                            </form>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}


                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="atbd_term_and_condition_area custom-control custom-checkbox checkbox-outline checkbox-outline-primary">
                                        <input type="checkbox" className="custom-control-input" name="listing_t" value="1" id="listing_t" />
                                        <label htmlFor="listing_t" className="not_empty custom-control-label">I Agree with all <a href="/terms" id="listing_t_c" target="_blank">Terms & Conditions</a></label>
                                    </div>
                                    <div className="btn_wrap list_submit m-top-25">
                                        <button type="submit" className="btn bg-dark-hb btn-lg listing_submit_btn">Submit listing</button>
                                    </div>
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                            </div>
                        </div>
                    </section>{/*<!-- ends: .add-listing-wrapper -->*/}


               <Footer />
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        list: state.list,
        login : state.login,
        logo: state.logo
    }
}

export default connect(mapStateToProps)(SignUp);
