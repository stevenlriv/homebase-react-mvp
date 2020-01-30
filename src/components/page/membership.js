import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbMembership } from '../content/element/breadcrumb';
import { ContentBlockMembership } from '../content/element/content-block';
import { Counter } from '../content/element/counter';
import Testimonial from '../content/element/carousel/testimonial';
import { SectionTitle } from '../content/element/section-title';
import ClientLogo from '../content/element/carousel/client-logo';
import { Subscribe } from '../content/element/subscribe';
import {connect} from 'react-redux';

const Membership = (props) => {
    const light = props.logo[0].light;
    return (
        <Fragment>
            {/* Header section start */}
            <section className="about-wrapper">
                <div className="mainmenu-wrapper">
                    <Header logo={light} class="menu--light" />
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbMembership />
                
                <ContentBlockMembership />
            </section>
            {/* Header section end */}


           <Footer />
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        logo: state.logo
    }
}

export default connect(mapStateToProps)(Membership);
