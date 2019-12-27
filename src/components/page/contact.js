import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { SectionTitle } from '../content/element/section-title';
import { connect } from 'react-redux';

const Contact = (props) => {
    const light = props.logo[0].light;
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

        <section className="faq-wrapper section-padding border-bottom">
            <div className="container">
                <SectionTitle
                title="How can we help?"
                content="" />

                <div className="row">
                    <div className="col-lg-12 text-center">
                      <p>We’re available 24/7 to help you become a member or answer any questions you may have.</p>
                      <p className="font-weight-bold"><i className="la la-phone"></i> &nbsp;&nbsp; 910-257-6628</p>
                      <p className="font-weight-bold"><i className="la la-envelope"></i> &nbsp;&nbsp; hello@renthomebase.com</p>
                    </div>
                </div>
            </div>
        </section>
           <Footer />
        </Fragment>
    )
}
const mapStateToProps = state => {
    return {
        list: state.list,
        login : state.login,
        logo: state.logo
    }
}

export default connect(mapStateToProps)(Contact);
