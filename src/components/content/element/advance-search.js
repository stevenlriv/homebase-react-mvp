import React, {useState, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function AdvSearch(props) {

        const handleFormSubmit = () => {

          //Tried to use state but it was not working, so decided to use
          //old shhool javascript

          let city = document.getElementById( "at_biz_dir-category" );
          city = city.options[ city.selectedIndex ].value;

          let moveIn = document.getElementById( "at_biz_dir-location" );
          moveIn = moveIn.options[ moveIn.selectedIndex ].value;

          //Verify that there are value selected
          if( city == 'Choose a City' ) {
            //alert('please select your city');
            return;
          }

          //Verify that there are value selected
          if( moveIn == 'Move in date' ) {
            //alert('when are you planning to move in');
            return;
          }

          //Once everything is proccessed as MVP feature just reditect
          //To their city page
          //alert('Redirecting... '+ city);
          window.location.replace(city);
        }

        return (
            <Fragment>
                <div className="directory_content_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="search_title_area">
                                    <h2 className="title">Fully furnished homes. Flexible duration.</h2>
                                    <p className="sub_title">Homebase is a network of homes where everything is done for you. All you have to do is enjoy your life!</p>
                                </div>{/* ends: .search_title_area */}
                                <div className="search_form">
                                    <div className="atbd_seach_fields_wrapper">
                                        <div className="single_search_field search_category">
                                            <select className="search_fields" id="at_biz_dir-category">
                                            <option>Choose a City</option>
                                            {

                                                Object.values(props.cities).map((value, key) => {

                                                    const { city, uri, tagLine } = value;
                                                    if( city !== '' ) {

                                                      return (
                                                        <option value={uri} key={key}>{tagLine}</option>
                                                      )
                                                    }
                                                })
                                            }
                                            </select>
                                        </div>

                                        <div className="single_search_field search_location">
                                            <select className="search_fields" id="at_biz_dir-location">
                                              <option>Move in date</option>
                                              <option value="soon">As soon as possible</option>
                                              <option value="week">Next Week</option>
                                              <option value="month">Next Month</option>
                                            </select>
                                        </div>

                                        <div className="atbd_submit_btn">
                                            <button type="submit" onClick={handleFormSubmit} className="btn btn-block bg-dark-hb btn-md btn_search" id="submitButton">Find my Homebase</button>
                                        </div>
                                    </div>
                                </div>{/* ends: .search_form */}
                            </div>{/* ends: .col-lg-10 */}
                        </div>
                    </div>
                </div>{/* ends: .directory_search_area */}
            </Fragment>
        )
}

const mapStateToProps = state => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps)(AdvSearch);
