import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { SectionTitle } from '../content/element/section-title';
import { connect } from 'react-redux';

const NotFound = (props) => {
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
                title="Oops!"
                content="We can't seem to find the page you're looking for." />

                <div className="row">
                    <div className="col-lg-12 text-center">
                      <p>Error Code: 404</p><br />

                      <p>Here are some helpful links instead:</p>

                      <p className="font-weight-bold"> <NavLink to="/">Home</NavLink> </p>
                      <p className="font-weight-bold"> <NavLink to="/find-a-homebase">Find A New Homebase</NavLink> </p>
                      <p className="font-weight-bold"> <NavLink to="/contact">Contact Us</NavLink> </p>
                      <p className="font-weight-bold"> <NavLink to="/living-in-homebase">Living In Homebase</NavLink> </p>
                      <p className="font-weight-bold"> <NavLink to="/faqs">Frequently Asked Questions</NavLink> </p>

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

export default connect(mapStateToProps)(NotFound);
