import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import AdvSearch from '../content/element/advance-search';
import { SectionTitle } from '../content/element/section-title';
import CardListingGrid4 from '../content/element/card/card-listing-grid-4';
import { NavLink } from 'react-router-dom';
import { ContentBlockHome } from '../content/element/content-block';
import { connect } from 'react-redux';

class Index extends Component {

    render() {
        const logdIn = () => {
            return this.props.isAuthenticated
        };

        const light = this.props.logo[0].light;
        return (
            <Fragment>


                {/* Header section start */}
                <section className="intro-wrapper bgimage overlay overlay--dark-hb">
                    <div className="bg_image_holder"><img src="./assets/img/intro-minimized.jpg" alt="" /></div>
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <AdvSearch />
                </section>
                {/* Header section end */}

                {/* Listing section start */}
                {/*
                <section className="listing-cards section-bg section-padding bg-hb">
                    <div className="container">
                        <SectionTitle
                            title="Explore a new city and move today"
                            content="Save thousands of dollars on rent by becoming a member of Homebase."
                        />
                        <div className="row">
                            <div className="listing-cards-wrapper col-lg-12">
                                <div className="row">
                                    <CardListingGrid4 logdIn={logdIn()} />
                                    <div className="col-lg-12 text-center m-top-20">
                                        <NavLink to="/find-a-homebase" className="btn bg-dark-hb">Find Your Homebase</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                */}
                {/* Listing section end */}

                <ContentBlockHome />

                {/* Testimonial section start */}
                {/*
                <section className="testimonial-wrapper section-padding--bottom">
                    <div className="container">
                        <SectionTitle
                            title="Trusted By Over 4000+ Users"
                            content="Here is what people say about Direo"
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
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.userAuth.isAuthenticated,
      list: state.list,
      logo: state.logo
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: () => dispatch({type: 'CREATE_LOGIN'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
