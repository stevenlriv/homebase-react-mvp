import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const noAction = e => e.preventDefault();
export class Accordion extends Component {

    render() {
        return (
            <Fragment>
                <div className="atbdb_content_module_contents">
                    <div className="atbdp-accordion">
                        <div className="accordion-single selected">
                            <h3 className="faq-title"><NavLink onClick={noAction} to="/at_demo">Question number one</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high level of precision, full legal compliance</p>
                        </div>
                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink onClick={noAction} to="/at_demo">Question number two and others</NavLink></h3>
                            <p className="ac-body" style={{display: 'none'}}>Ensuring productivity and growth is essential for architecture and engineering teams. The industry requires a high.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

class Accordion2 extends Component {

    render() {
        const cities = () => {
          let string = '';
          const actualPlaces = this.props.cities;
          actualPlaces.forEach(
            element => {
              string = string + `${element.city} ${element.state}, `;
            }
          );
          return string;
        };


        return (
            <Fragment>
                <div className="atbdb_content_module_contents">
                    <div className="atbdp-accordion">
                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>How often do I get paid?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>We pay out on a monthly basis before the 5th of the month.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Do I get any reports or updates?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Homebase owners have 24/7 access to online data in their personal online file or on the Homebase partners mobile app.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>What kind of insurance do you provide?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>We currently do not provide insurance, but are planning to provide property and liability insurance to every partner. This insurance will cover over $1m in value.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Who is responsible for maintenance?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Homebase performs all minor maintenance. Owners are responsible for structural, plumbing, electric issues.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Do I have any control who stays in my property?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Information about current tenants is accessible online. You will be provided with the results of any tenant background checks prior to their tenancy.</p>
                        </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps)(Accordion2);
