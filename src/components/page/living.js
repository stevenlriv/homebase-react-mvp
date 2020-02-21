import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbLiving } from '../content/element/breadcrumb';
import { ContentBlockLiving } from '../content/element/content-block';
import {connect} from 'react-redux';

const About = (props) => {
    const light = props.logo[0].light;
    return (
        <Fragment>
            {/* Header section start */}
            <section className="about-wrapper">
                <div className="mainmenu-wrapper">
                    <Header logo={light} class="menu--light" />
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbLiving />
            </section>
            {/* Header section end */}
            <ContentBlockLiving />

            {/* Testimonial section start */}
            {/*
            <section className="testimonial-wrapper section-padding-strict">
                <div className="container">
                    <SectionTitle
                        title="Trusted By Entreprenuers"
                        content=""
                    />
                    <div className="row">
                        <Testimonial />
                    </div>
                </div>
            </section>
            */}
            {/* Testimonial section end */}

           <Footer />
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        logo: state.logo
    }
}

export default connect(mapStateToProps)(About);
