import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbForOwners } from '../content/element/breadcrumb';
import { ContentBlockForOwners } from '../content/element/content-block';
import TestimonialRealtors from '../content/element/carousel/testimonial-realtors';
import { SectionTitle } from '../content/element/section-title';
import Accordion2 from '../content/element/accordion-forowners';
import {connect} from 'react-redux';

const ForOwners = (props) => {
    const light = props.logo[0].light;
    return (
        <Fragment>
            {/* Header section start */}
            <section className="about-wrapper">
                <div className="mainmenu-wrapper">
                    <Header logo={light} class="menu--light" />
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
                <BreadcrumbForOwners />
            </section>
            {/* Header section end */}
            <ContentBlockForOwners />

            {/* Testimonial section start */}
            <section className="testimonial-wrapper section-padding-strict">
                <div className="container">
                    <SectionTitle
                        title="Trusted By Homeowners And Professionals"
                        content="Here is what people professionals say about Homebase"
                    />
                    <div className="row">
                        <TestimonialRealtors />
                    </div>
                </div>
            </section>
            {/* Testimonial section end */}

            <section className="faq-wrapper section-padding border-bottom bg-hb">
                <div className="container">
                    <SectionTitle
                    title="FAQ'S"
                    content="Landlords love us because of our unique system, attention to detail and reliability." />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-contents">
                                <div className="atbd_content_module atbd_faqs_module">

                                    <Accordion2 />
                                </div>
                            </div>
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
        logo: state.logo
    }
}

export default connect(mapStateToProps)(ForOwners);
