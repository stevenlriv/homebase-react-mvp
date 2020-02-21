import React, {Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import CardCategoryGrid4 from '../content/element/card/card-category-grid-4';
import { SectionTitle } from '../content/element/section-title';
import { connect } from 'react-redux';

const AllCategoris = (props) => {
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

          {/*<CardCategoryGrid4 />*/}

            <section className="faq-wrapper section-padding border-bottom">
                <div className="container">
                    <SectionTitle
                    title="Choose your city"
                    content="" />

                    <div className="row">
                      <CardCategoryGrid4 />
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

export default connect(mapStateToProps)(AllCategoris);
