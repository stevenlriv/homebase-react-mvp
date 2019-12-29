import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
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

export class Accordion2 extends Component {

    render() {
        return (
            <Fragment>
                <div className="atbdb_content_module_contents">
                    <div className="atbdp-accordion">
                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>How does Homebase works?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Its easy! Just find a home you're interested in from our network of houses. We'll run a background and credit check, then pack your personal effects, and show up at your new home and start living!</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>What cities are Homebase in?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>We currently are in San Juan PR and San Francisco, but have more locations coming soon.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>What does home shared means?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>In our shared apartments, we offer you beautiful homes where you will share bathrooms, kitchens, living room (s) with other roommates.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Can I go from one Homebase to the next?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Once you've joined Homebase you can easily move between our homes - no additional applications necessary! Reach out at hello@renthomebase.com if you're looking to switch homes.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>How short or long can I stay?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>As long as you like! Rates vary by the duration of your stay, though.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Can I tour a home before booking it?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Currently, we are only doing pre-recorded video tours.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Do you run a background and credit check?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Yes.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Will I be charged immediately?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>We will not reserve your home until you've paid the deposit and first month's rent.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Do I need to set up utilities?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Nope! We've got everything up and running before you move in.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>What's your pet policy?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>Our pet-friendly apartments allow up to 2 dogs, provided they're under 35 pounds and you don't have 'aggressive' dog breeds. If you have a pet with you, we'll charge a $400 pet fee, plus $75 per pet per month. This is to cover the building's pet fees and to take care of our furnishings.</p>
                        </div>

                        <div className="accordion-single">
                            <h3 className="faq-title"><NavLink to="/faqs" onClick={noAction}>Can I rent my home out on Airbnb?</NavLink></h3>
                            <p className="ac-body" style={{display: 'block'}}>No, our properties can't be rented out by members.</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
