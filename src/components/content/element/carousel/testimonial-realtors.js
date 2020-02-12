import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';

const options = {
    items: 1,
    dots: false,
    nav: true,
    navText: ['<span class="i la la-long-arrow-left"></span>', '<span class="i la la-long-arrow-right"></span>'],
    navElement: 'button'
};

class TestimonialRealtors extends Component {
    render() {
        const { tistimonial } = this.props;
        return (
            <Fragment>
                <OwlCarousel options={options} className="testimonial-carousel owl-carousel" >

                <div className="carousel-single" key="02">
                    <div className="author-thumb">
                        <img src="./assets/img/livia-realtor.png" width="90" height="90" alt="" className="rounded-circle" />
                    </div>
                    <div className="author-info">
                        <h4>Livia G.</h4>
                        <span>Real Estate Broker</span>
                    </div>
                    <p className="author-comment">It has been great partnering with Homebase. They communicate effectively, are passionate about what they do, and deeply understand the local market. Love working with them!</p>
                </div>

                                <div className="carousel-single" key="01">
                                    <div className="author-thumb">
                                        <img src="./assets/img/cynthia-property.jpeg" width="90" height="90" alt="" className="rounded-circle" />
                                    </div>
                                    <div className="author-info">
                                        <h4>Cynthia R.</h4>
                                        <span>Property Manager</span>
                                    </div>
                                    <p className="author-comment">Nice, patient, and open to compromise. They’ll do well with their unique culture and innovative approach!</p>
                                </div>

                </OwlCarousel>
            </Fragment>
        )
    }
}
const mapStateToProps =  (state) => {
    return {
        tistimonial : state.testimonial
    }
}
export default connect(mapStateToProps)(TestimonialRealtors)
