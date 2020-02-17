import React, {useState, setState, Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Map1 from '../content/element/map';

function AddListing(props) {

        const user = props.user;

        // STATE FOR FORM FIELDS
        const [airConditioning, setairConditioning] = useState('');
        const [bookTourLink, setbookTourLink] = useState('');
        const [checkInDescription, setcheckInDescription] = useState('');
        const [checkInPinCode, setcheckInPinCode] = useState('');
        const [citiesCategory, setcitiesCategory] = useState('');

        const [country, setcountry] = useState('');
        const [depositFullHouse, setdepositFullHouse] = useState('');
        const [depositPerRoom, setdepositPerRoom] = useState('');
        const [electricity, setelectricity] = useState('');

        const [furnished, setfurnished] = useState('');
        const [listingDescription, setlistingDescription] = useState('');
        const [listingTitle, setlistingTitle] = useState('');
        const [monthlyRentFullHouse, setmonthlyRentFullHouse] = useState('');

        const [monthlyRentPerRoom, setmonthlyRentPerRoom] = useState('');
        const [numberBathrooms, setnumberBathrooms] = useState('');
        const [numberBedrooms, setnumberBedrooms] = useState('');
        const [parking, setparking] = useState('');

        const [pets, setpets] = useState('');
        const [physicalAddress, setphysicalAddress] = useState('');
        const [postalAddress, setpostalAddress] = useState('');
        const [smoking, setsmoking] = useState('');

        const [squareFeet, setsquareFeet] = useState('');
        const [state, setstate] = useState('');
        const [unitType, setunitType] = useState('');
        const [videoTour, setvideoTour] = useState('');

        const [water, setwater] = useState('');
        const [wifi, setwifi] = useState('');
        const [wifiPassword, setwifiPassword] = useState('');
        const [wifiSSID, setwifiSSID] = useState('');
        const [zipCode, setzipCode] = useState('');

        // STATE FOR IMAGE FIELDS
        const [checkInFirstImg, setcheckInFirstImg] = useState('');
        const [checkInLastImg, setcheckInLastImg] = useState('');
        const [imgMain, setimgMain] = useState('');
        const [listingImg1, setlistingImg1] = useState('');
        const [listingImg2, setlistingImg2] = useState('');
        const [listingImg3, setlistingImg3] = useState('');
        const [listingImg4, setlistingImg4] = useState('');
        const [listingImg5, setlistingImg5] = useState('');
        const [listingImg6, setlistingImg6] = useState('');
        const [listingImg7, setlistingImg7] = useState('');
        const [listingImg8, setlistingImg8] = useState('');

        // HANGLE FORM STATES
        const handleairConditioning = ({ target }) => {
          setairConditioning(target.value);
        };
        const handlebookTourLink = ({ target }) => {
          setbookTourLink(target.value);
        };
        const handlecheckInDescription = ({ target }) => {
          setcheckInDescription(target.value);
        };
        const handlecheckInPinCode = ({ target }) => {
          setcheckInPinCode(target.value);
        };
        const handlecitiesCategory = ({ target }) => {
          setcitiesCategory(target.value);
        };

        ///

        const handlecountry = ({ target }) => {
          setcountry(target.value);
        };
        const handledepositFullHouse = ({ target }) => {
          setdepositFullHouse(target.value);
        };
        const handledepositPerRoom = ({ target }) => {
          setdepositPerRoom(target.value);
        };
        const handleelectricity = ({ target }) => {
          setelectricity(target.value);
        };

        ///

        const handlefurnished = ({ target }) => {
          setfurnished(target.value);
        };
        const handlelistingDescription = ({ target }) => {
          setlistingDescription(target.value);
        };
        const handlelistingTitle = ({ target }) => {
          setlistingTitle(target.value);
        };
        const handlemonthlyRentFullHouse = ({ target }) => {
          setmonthlyRentFullHouse(target.value);
        };

        ///

        const handlemonthlyRentPerRoom = ({ target }) => {
          setmonthlyRentPerRoom(target.value);
        };
        const handlenumberBathrooms = ({ target }) => {
          setnumberBathrooms(target.value);
        };
        const handlenumberBedrooms = ({ target }) => {
          setnumberBedrooms(target.value);
        };
        const handleparking = ({ target }) => {
          setparking(target.value);
        };

        ///

        const handlepets = ({ target }) => {
          setpets(target.value);
        };
        const handlephysicalAddress = ({ target }) => {
          setphysicalAddress(target.value);
        };
        const handlepostalAddress = ({ target }) => {
          setpostalAddress(target.value);
        };
        const handlesmoking = ({ target }) => {
          setsmoking(target.value);
        };

        ///

        const handlesquareFeet = ({ target }) => {
          setsquareFeet(target.value);
        };
        const handlestate = ({ target }) => {
          setstate(target.value);
        };
        const handleunitType = ({ target }) => {
          setunitType(target.value);
        };
        const handlevideoTour = ({ target }) => {
          setvideoTour(target.value);
        };

        ///

        const handlewater = ({ target }) => {
          setwater(target.value);
        };
        const handlewifi = ({ target }) => {
          setwifi(target.value);
        };
        const handlewifiPassword = ({ target }) => {
          setwifiPassword(target.value);
        };
        const handlewifiSSID = ({ target }) => {
          setwifiSSID(target.value);
        };
        const handlezipCode = ({ target }) => {
          setzipCode(target.value);
        };


        // HANDLE IMAGE STATES
        const handlecheckInFirstImg = (e) => {
          const image = e.target.files[0];
          setcheckInFirstImg(imageFile => (image));
        }

        const handlecheckInLastImg = (e) => {
          const image = e.target.files[0];
          setcheckInLastImg(imageFile => (image));
        }

        const handleimgMain = (e) => {
          const image = e.target.files[0];
          setimgMain(imageFile => (image));
        }

        const handlelistingImg1 = (e) => {
          const image = e.target.files[0];
          setlistingImg1(imageFile => (image));
        }
        const handlelistingImg2 = (e) => {
          const image = e.target.files[0];
          setlistingImg2(imageFile => (image));
        }
        const handlelistingImg3 = (e) => {
          const image = e.target.files[0];
          setlistingImg3(imageFile => (image));
        }
        const handlelistingImg4 = (e) => {
          const image = e.target.files[0];
          setlistingImg4(imageFile => (image));
        }
        const handlelistingImg5 = (e) => {
          const image = e.target.files[0];
          setlistingImg5(imageFile => (image));
        }
        const handlelistingImg6 = (e) => {
          const image = e.target.files[0];
          setlistingImg6(imageFile => (image));
        }
        const handlelistingImg7 = (e) => {
          const image = e.target.files[0];
          setlistingImg7(imageFile => (image));
        }
        const handlelistingImg8 = (e) => {
          const image = e.target.files[0];
          setlistingImg8(imageFile => (image));
        }

        /////////////////////////////////////////////////////////////////////////////////
        // Verify if the user is an admin, if not reddirect away
        if( user.userData.type != "admin" ) return <Redirect to="/my-homebase"  />;
        /////////////////////////////////////////////////////////////////////////////////

        const handleSubmit = (e) => {
          //To prevent modal reload after submission
          e.preventDefault();

          //Variables Filled on The back-ends
          const addedBy = user.userAuth.userId;
          const addedOn = Date.now();
          const availabilityRoom = numberBedrooms;
          const availabilityDate = Date.now();
          const uri = '';

          //////////////////////////////////////////////
          //Convert true and false from string to bool
          //////////////////////////////////////////////
        }

        const cities = props.cities;
        const light = props.logo[0].light;
        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <BreadcrumbWraper title="Add Listing" />
                </section>
                {/* Header section end */}

                    <section className="add-listing-wrapper border-bottom section-bg section-padding-strict">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-user"></span>General Information</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <form action="/">
                                                <div className="form-group">
                                                    <label htmlFor="title" className="form-label">Title</label>
                                                    <input onChange={handlelistingTitle} type="text" className="form-control" placeholder="Enter a descriptive title for the listing" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="desc" className="form-label">Long Description</label>
                                                    <textarea onChange={handlelistingDescription} rows="12" className="form-control" placeholder="Enter as much information you think is needed for the listings"></textarea>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="custom-field" className="form-label">Select The Unit Type</label>
                                                    <div className="select-basic">
                                                        <select className="form-control" onChange={handleunitType}>
                                                            <option value="House">House</option>
                                                            <option value="Apartment">Apartment</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="custom-field" className="form-label">Select The Number of Bedrooms</label>
                                                    <div className="select-basic">
                                                        <select className="form-control" onChange={handlenumberBedrooms}>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="custom-field" className="form-label">Select The Number of Bathrooms</label>
                                                    <div className="select-basic">
                                                        <select className="form-control" onChange={handlenumberBathrooms}>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Montly Rent For The Full Unit</label>

                                                    <div className="pricing-option-inputs">
                                                        <input onChange={handlemonthlyRentFullHouse} type="number" className="form-control" placeholder="Only Numbers Eg. 1000" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Deposit if Renting The Full Unit</label>

                                                    <div className="pricing-option-inputs">
                                                        <input onChange={handledepositFullHouse} type="number" className="form-control" placeholder="Only Numbers Eg. 1000" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Montly Rent Per Bedroom</label>

                                                    <div className="pricing-option-inputs">
                                                        <input onChange={handlemonthlyRentPerRoom} type="number" className="form-control" placeholder="Only Numbers Eg. 1000" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Deposit if Renting A Single Bedroom</label>

                                                    <div className="pricing-option-inputs">
                                                        <input onChange={handledepositPerRoom} type="number" className="form-control" placeholder="Only Numbers Eg. 1000" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="title" className="form-label">House Square Feet</label>
                                                    <input onChange={handlesquareFeet} type="text" className="form-control" placeholder="This is optional" />
                                                </div>
                                            </form>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-calendar-check-o"></span> Whats Included </h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <div className="form-group">
                                              <label htmlFor="custom-field" className="form-label">Is It Furnished?</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handlefurnished}>
                                                    <option value="true">Yes</option>
                                                    <option value="false">No</option>
                                                  </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                              <label htmlFor="custom-field" className="form-label">Is Water included in the price?</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handlewater}>
                                                    <option value="true">Yes</option>
                                                    <option value="false">No</option>
                                                  </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                              <label htmlFor="custom-field" className="form-label">Is Electricity included in the price?</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handleelectricity}>
                                                    <option value="true">Yes</option>
                                                    <option value="false">No</option>
                                                  </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                              <label htmlFor="custom-field" className="form-label">Is Wifi included in the price?</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handlewifi}>
                                                    <option value="true">Yes</option>
                                                    <option value="false">No</option>
                                                  </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                              <label htmlFor="custom-field" className="form-label">Does the unit have A/C?</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handleairConditioning}>
                                                    <option value="false">No</option>
                                                    <option value="true">Yes</option>
                                                  </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                              <label htmlFor="custom-field" className="form-label">Does the building or house have parking available?</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handleparking}>
                                                    <option value="false">No</option>
                                                    <option value="true">Yes</option>
                                                  </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                              <label htmlFor="custom-field" className="form-label">Are pets allowed?</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handlepets}>
                                                    <option value="false">No</option>
                                                    <option value="true">Yes</option>
                                                  </select>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                              <label htmlFor="custom-field" className="form-label">Is smoking allowed?</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handlesmoking}>
                                                    <option value="false">No</option>
                                                    <option value="true">Yes</option>
                                                  </select>
                                                </div>
                                            </div>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-calendar-check-o"></span> Location </h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">Physical Address (do not include postal code or city/country)</label>
                                                <input onChange={handlephysicalAddress} type="text" className="form-control" placeholder="Eg. 1410 Calle Georgetti" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">Postal Address (do not include postal code or city/country)</label>
                                                <input onChange={handlepostalAddress} type="text" className="form-control" placeholder="Eg. 1410 Calle Georgetti" required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">City</label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handlecitiesCategory}>
                                                  {
                                                      Object.values(cities).map((value, key) => {
                                                          const { city, state, img, uri, tagLine } = value;
                                                          if( city != '' ) {
                                                            return (
                                                              <option value={city}>{tagLine}</option>
                                                            )
                                                          }
                                                      })
                                                  }
                                                  </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">State</label>
                                                <select className="form-control" onChange={handlestate}>
                                                {
                                                    Object.values(cities).map((value, key) => {
                                                        const { city, state, img, uri, tagLine } = value;
                                                        if( state != '' ) {
                                                          return (
                                                            <option value={state}>{state}</option>
                                                          )
                                                        }
                                                    })
                                                }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">Country</label>
                                                <select className="form-control" onChange={handlecountry}>
                                                {
                                                    Object.values(cities).map((value, key) => {
                                                        const { city, country, state, img, uri, tagLine } = value;
                                                        if( country != '' ) {
                                                          return (
                                                            <option value={country}>{country}</option>
                                                          )
                                                        }
                                                    })
                                                }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">Zip Code</label>
                                                <input onChange={handlezipCode} type="text" className="form-control" placeholder="Eg. 00680" required />
                                            </div>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-user"></span>Check-In Information</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">
                                            <form action="/">
                                                <div className="form-group">
                                                  <label htmlFor="address" className="form-label">Check In Image #1 (to show where the lockbox is located)</label>

                                                  <input type="file" className="btn btn-sm" onChange={handlecheckInFirstImg} />
                                                </div>

                                                <div className="form-group">
                                                  <label htmlFor="address" className="form-label">Check In Image #2 (optional)</label>

                                                  <input type="file" className="btn btn-sm" onChange={handlecheckInLastImg} />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Description For User</label>
                                                    <textarea onChange={handlecheckInDescription} rows="4" className="form-control" placeholder="Description"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="phone_number" className="form-label">Pin Code</label>
                                                    <input onChange={handlecheckInPinCode} type="text" placeholder="Pin Code" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="contact_email" className="form-label">Wifi SSID</label>
                                                    <input onChange={handlewifiSSID} type="text" className="form-control" placeholder="Enter SSID" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="website_address" className="form-label">Wifi Password</label>
                                                    <input onChange={handlewifiPassword} type="text" className="form-control" placeholder="" />
                                                </div>
                                            </form>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="atbd_content_module">
                                        <div className="atbd_content_module__tittle_area">
                                            <div className="atbd_area_title">
                                                <h4><span className="la la-calendar-check-o"></span> Listing Images & Video & Self Tour</h4>
                                            </div>
                                        </div>
                                        <div className="atbdb_content_module_contents">

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Main Listing Image (required)</label>

                                            <input type="file" className="btn btn-sm" onChange={handleimgMain} />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Listing Image #1 (optional)</label>

                                            <input type="file" className="btn btn-sm" onChange={handlelistingImg1} />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Listing Image #2 (optional)</label>

                                            <input type="file" className="btn btn-sm" onChange={handlelistingImg2} />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Listing Image #3 (optional)</label>

                                            <input type="file" className="btn btn-sm" onChange={handlelistingImg3} />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Listing Image #4 (optional)</label>

                                            <input type="file" className="btn btn-sm" onChange={handlelistingImg4} />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Listing Image #5 (optional)</label>

                                            <input type="file" className="btn btn-sm" onChange={handlelistingImg5} />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Listing Image #6 (optional)</label>

                                            <input type="file" className="btn btn-sm" onChange={handlelistingImg6} />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Listing Image #7 (optional)</label>

                                            <input type="file" className="btn btn-sm" onChange={handlelistingImg7} />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="address" className="form-label">Listing Image #8 (optional)</label>

                                            <input type="file" className="btn btn-sm" onChange={handlelistingImg8} />
                                          </div>

                                            <div className="form-group">
                                                <label className="form-label">Book Tour Link (link to calendly so people can book this unit)</label>

                                                <div className="pricing-option-inputs">
                                                    <input onChange={handlebookTourLink} type="text" className="form-control" placeholder="This is optional" />
                                                </div>
                                            </div>

                                            <div className="form-group m-top-30">
                                                <label htmlFor="videourl" className="not_empty form-label">Video Tour Url</label>
                                                <input onChange={handlevideoTour} type="text" id="videourl" name="videourl" className="form-control directory_field" placeholder="This is optional" />
                                            </div>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="btn_wrap list_submit m-top-25">
                                        <button type="submit" className="btn btn-lg bg-dark-hb">Submit listing</button>
                                    </div>
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                            </div>
                        </div>
                    </section>{/*<!-- ends: .add-listing-wrapper -->*/}


               <Footer />
            </Fragment>
        )
}
const mapStateToProps = state => {
    return {
      user: state.userAuth.user,
      list: state.list,
      isAuthenticated: state.userAuth.isAuthenticated,
      logo: state.logo,
      cities: state.cities
    }
}

export default connect(mapStateToProps)(AddListing);
