import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { SectionTitle } from '../content/element/section-title';
import { Accordion2 } from '../content/element/accordion';
import { connect } from 'react-redux';

const Faqs = (props) => {
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
                    title="We are here to help"
                    content="We gathered some of the most frequent questions and our answers to them" />

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="faq-contents">
                                <div className="atbd_content_module atbd_faqs_module">
                                    <div className="atbd_content_module__tittle_area">
                                        <div className="atbd_area_title">
                                            <h4><span className="la la-question-circle"></span>Lisiitng FAQ's</h4>
                                        </div>
                                    </div>
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

export default connect(mapStateToProps)(Faqs);
