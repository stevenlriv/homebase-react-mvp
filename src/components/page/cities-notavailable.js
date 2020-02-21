import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { SectionTitle } from '../content/element/section-title';
import { connect } from 'react-redux';

const CitiesNotAvailable = (props) => {

    return (
        <Fragment>
            {/* Header section start */}
            <section className="header-breadcrumb bgimage overlay overlay--dark">
                <div className="mainmenu-wrapper">
                    <Header logo={props.logo[0].light} class="menu--light" />
                </div>
                {/* <!-- ends: .mainmenu-wrapper --> */}
            </section>
            {/* Header section end */}

            <section className="faq-wrapper section-padding border-bottom">
                <div className="container">
                    <SectionTitle
                    title="Ups, it looks like there are no units available at this time"
                    content="But don't worry come back in a few days, we are always adding more daily" />


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

export default connect(mapStateToProps)(CitiesNotAvailable);
