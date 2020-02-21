import React, {useState, Fragment} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { newListingDocument } from '../../Store/action/listingActions';
import {storage} from "../../Store/firebase/firebase";

function AddListing(props) {

        const user = props.user;
        const d = new Date();

        let cityArray = {};
        let stateArray = {};
        let countryArray = {};

        // STATE FOR FORM FIELDS
        const [airConditioning, setairConditioning] = useState('false');
        const [bookTourLink, setbookTourLink] = useState('');
        const [checkInPinCode, setcheckInPinCode] = useState('');
        const [citiesCategory, setcitiesCategory] = useState('');

        const [checkInDescription1, setcheckInDescription1] = useState('');
        const [checkInDescription2, setcheckInDescription2] = useState('');
        const [checkInDescription3, setcheckInDescription3] = useState('');
        const [checkInDescription4, setcheckInDescription4] = useState('');
        const [checkInDescription5, setcheckInDescription5] = useState('');
        const [checkInDescription6, setcheckInDescription6] = useState('');

        const [country, setcountry] = useState('');
        const [depositFullHouse, setdepositFullHouse] = useState('');
        const [depositPerRoom, setdepositPerRoom] = useState('');
        const [electricity, setelectricity] = useState('true');

        const [furnished, setfurnished] = useState('true');
        const [listingDescription, setlistingDescription] = useState('');
        const [listingTitle, setlistingTitle] = useState('');
        const [monthlyRentFullHouse, setmonthlyRentFullHouse] = useState('');

        const [monthlyRentPerRoom, setmonthlyRentPerRoom] = useState('');
        const [numberBathrooms, setnumberBathrooms] = useState('1');
        const [numberBedrooms, setnumberBedrooms] = useState('1');
        const [parking, setparking] = useState('false');

        const [pets, setpets] = useState('false');
        const [physicalAddress, setphysicalAddress] = useState('');
        const [postalAddress, setpostalAddress] = useState('');
        const [smoking, setsmoking] = useState('false');

        const [squareFeet, setsquareFeet] = useState('');
        const [state, setstate] = useState('');
        const [unitType, setunitType] = useState('House');
        const [videoTour, setvideoTour] = useState('');

        const [water, setwater] = useState('true');
        const [wifi, setwifi] = useState('true');
        const [wifiPassword, setwifiPassword] = useState('');
        const [wifiSSID, setwifiSSID] = useState('');
        const [zipCode, setzipCode] = useState('');

        const [year, setyear] = useState(d.getFullYear());
        const [month, setmonth] = useState(d.getMonth() + 1); //+1 because in js January = 0
        const [date, setdate] = useState(d.getDate());

        let [formError, setError] = useState('');
        let [formSucc, setSuccess] = useState('');

        // STATE FOR IMAGE FIELDS
        const [checkInImg1, setcheckInImg1] = useState('');
        const [checkInImg2, setcheckInImg2] = useState('');
        const [checkInImg3, setcheckInImg3] = useState('');
        const [checkInImg4, setcheckInImg4] = useState('');
        const [checkInImg5, setcheckInImg5] = useState('');
        const [checkInImg6, setcheckInImg6] = useState('');
        const [imgMain, setimgMain] = useState('');
        const [listingImg1, setlistingImg1] = useState('');
        const [listingImg2, setlistingImg2] = useState('');
        const [listingImg3, setlistingImg3] = useState('');
        const [listingImg4, setlistingImg4] = useState('');
        const [listingImg5, setlistingImg5] = useState('');
        const [listingImg6, setlistingImg6] = useState('');
        const [listingImg7, setlistingImg7] = useState('');
        const [listingImg8, setlistingImg8] = useState('');

        //Images variables to attach to Url
        const [checkInImg1Fix, setcheckInImg1Fix] = useState('');
        const [checkInImg2Fix, setcheckInImg2Fix] = useState('');
        const [imgMainFix, setimgMainFix] = useState('');
        const [listingImg1Fix, setlistingImg1Fix] = useState('');
        const [listingImg2Fix, setlistingImg2Fix] = useState('');
        const [listingImg3Fix, setlistingImg3Fix] = useState('');
        const [listingImg4Fix, setlistingImg4Fix] = useState('');
        const [listingImg5Fix, setlistingImg5Fix] = useState('');
        const [listingImg6Fix, setlistingImg6Fix] = useState('');
        const [listingImg7Fix, setlistingImg7Fix] = useState('');
        const [listingImg8Fix, setlistingImg8Fix] = useState('');

        // HANGLE FORM STATES
        const handleairConditioning = ({ target }) => {
          setairConditioning(target.value);
        };
        const handlebookTourLink = ({ target }) => {
          setbookTourLink(target.value);
        };
        const handlecheckInPinCode = ({ target }) => {
          setcheckInPinCode(target.value);
        };
        const handlecitiesCategory = ({ target }) => {
          setcitiesCategory(target.value);
        };

        ///

        const handlecheckInDescription1 = ({ target }) => {
          setcheckInDescription1(target.value);
        };

        const handlecheckInDescription2 = ({ target }) => {
          setcheckInDescription2(target.value);
        };

        const handlecheckInDescription3 = ({ target }) => {
          setcheckInDescription3(target.value);
        };

        const handlecheckInDescription4 = ({ target }) => {
          setcheckInDescription4(target.value);
        };

        const handlecheckInDescription5 = ({ target }) => {
          setcheckInDescription5(target.value);
        };

        const handlecheckInDescription6 = ({ target }) => {
          setcheckInDescription6(target.value);
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

        ///

        const handleyear = ({ target }) => {
          setyear(target.value);
        };
        const handlemonth = ({ target }) => {
          setmonth(target.value);
        };
        const handledate = ({ target }) => {
          setdate(target.value);
        };

        // HANDLE IMAGE STATES
        const handlecheckInImg1 = (e) => {
          const image = e.target.files[0];
          setcheckInImg1(imageFile => (image));
        }
        const handlecheckInImg2 = (e) => {
          const image = e.target.files[0];
          setcheckInImg2(imageFile => (image));
        }
        const handlecheckInImg3 = (e) => {
          const image = e.target.files[0];
          setcheckInImg3(imageFile => (image));
        }
        const handlecheckInImg4 = (e) => {
          const image = e.target.files[0];
          setcheckInImg4(imageFile => (image));
        }
        const handlecheckInImg5 = (e) => {
          const image = e.target.files[0];
          setcheckInImg5(imageFile => (image));
        }
        const handlecheckInImg6 = (e) => {
          const image = e.target.files[0];
          setcheckInImg6(imageFile => (image));
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
        if( user.userData.type !== "admin" ) return <Redirect to="/my-homebase"  />;
        /////////////////////////////////////////////////////////////////////////////////

        //////////////////////////////////////////////
        // Form Submition
        //////////////////////////////////////////////

        const handleSubmit = (e) => {
          //To prevent modal reload after submission
          e.preventDefault();

          //Form Error and Success
          const fmMsg = document.getElementById("form-message");

          //We proccess the form submition

          if ( listingTitle === '' ) {
            setError('Please enter a title for the listing.');
            fmMsg.scrollIntoView();
            return;
          }

          if ( listingDescription === '' ) {
            setError('Please enter a description for the listing.');
            fmMsg.scrollIntoView();
            return;
          }

          if ( monthlyRentFullHouse === '' ) {
            setError('Please enter the monthly rent for the unit.');
            fmMsg.scrollIntoView();
            return;
          }

          if ( depositFullHouse === '' ) {
            setError('Please enter the deposit required to rent the unit.');
            fmMsg.scrollIntoView();
            return;
          }

          if ( physicalAddress === '' ) {
            setError('Please enter the unit physical address.');
            fmMsg.scrollIntoView();
            return;
          }

          /*
          if ( postalAddress === '' ) {
            setError('Please enter the unit postal address.');
            fmMsg.scrollIntoView();
            return;
          }
          */

          if ( citiesCategory === '' || state === '' || country === '' ) {
            setError('Please select the city, state and country.');
            fmMsg.scrollIntoView();
            return;
          }

          if ( zipCode === '' ) {
            setError('Please enter the unit zipcode.');
            fmMsg.scrollIntoView();
            return;
          }

          if ( checkInDescription1 === '' ) {
            setError('Please enter a description so the user knows what to do when is checking in.');
            fmMsg.scrollIntoView();
            return;
          }

          // We proccess the image submition
          if(imgMain === '') {
            setError('Please upload the main image for the listing.');
            fmMsg.scrollIntoView();
            return;
          }

          ///////////////////////
          // We upload the images
          ///////////////////////
          const storageURL = `/images/listings/${d.getFullYear()}/${d.getMonth()}/${d.getDate()}`;
          const rnImage = Math.floor(100000 + Math.random() * 90000000);

          //MAIN IMAGE
          if(imgMain !== '') {
            const uploadimgMain = storage.ref(`${storageURL}/${rnImage}-${imgMain.name}`).put(imgMain);

            console.log(uploadimgMain);
            console.log('---');

            const getlolito = () => { uploadimgMain.on('state_changed', () => {
              storage.ref(storageURL).child(`${rnImage}-${imgMain.name}`).getDownloadURL()
               .then(fireBaseUrl => {
                 setimgMainFix(fireBaseUrl);
                 return fireBaseUrl;
               })
             }).catch(function(error) {
               // Handle any errors
             });

          }
          console.log('last test of URL');
          console.log(getlolito());

        }



          // Other Images
          if(checkInImg1 !== '') {
            const uploadcheckInImg1 = storage.ref(`${storageURL}/${rnImage}-${checkInImg1.name}`).put(checkInImg1);
            uploadcheckInImg1.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${checkInImg1.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   //setcheckInImg1Fix(fireBaseUrl);
                 })
              })
          }

          if(checkInImg2 !== '') {
            const uploadcheckInImg2 = storage.ref(`${storageURL}/${rnImage}-${checkInImg2.name}`).put(checkInImg2);
            uploadcheckInImg2.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${checkInImg2.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                  // setcheckInImg2Fix('HOLAAAAAAA SII FUNCIONAAA');
                 })
              })
          }

          if(checkInImg3 !== '') {
            const uploadcheckInImg3 = storage.ref(`${storageURL}/${rnImage}-${checkInImg3.name}`).put(checkInImg3);
            uploadcheckInImg3.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${checkInImg3.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   //setcheckInImg3Fix('HOLAAAAAAA SII FUNCIONAAA');
                 })
              })
          }

          if(checkInImg4 !== '') {
            const uploadcheckInImg4 = storage.ref(`${storageURL}/${rnImage}-${checkInImg4.name}`).put(checkInImg4);
            uploadcheckInImg4.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${checkInImg4.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   //setcheckInImg4Fix('HOLAAAAAAA SII FUNCIONAAA');
                 })
              })
          }

          if(checkInImg5 !== '') {
            const uploadcheckInImg5 = storage.ref(`${storageURL}/${rnImage}-${checkInImg5.name}`).put(checkInImg5);
            uploadcheckInImg5.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${checkInImg5.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   //setcheckInImg5Fix('HOLAAAAAAA SII FUNCIONAAA');
                 })
              })
          }

          if(checkInImg6 !== '') {
            const uploadcheckInImg6 = storage.ref(`${storageURL}/${rnImage}-${checkInImg6.name}`).put(checkInImg6);
            uploadcheckInImg6.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${checkInImg6.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   //setcheckInImg6Fix('HOLAAAAAAA SII FUNCIONAAA');
                 })
              })
          }

          if(listingImg1 !== '') {
            const uploadlistingImg1 = storage.ref(`${storageURL}/${rnImage}-${listingImg1.name}`).put(listingImg1);
            uploadlistingImg1.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${listingImg1.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   setlistingImg1Fix(fireBaseUrl);
                 })
              })
          }

          if(listingImg2 !== '') {
            const uploadlistingImg2 = storage.ref(`${storageURL}/${rnImage}-${listingImg2.name}`).put(listingImg2);
            uploadlistingImg2.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${listingImg2.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   setlistingImg2Fix(fireBaseUrl);
                 })
              })
          }

          if(listingImg3 !== '') {
            const uploadlistingImg3 = storage.ref(`${storageURL}/${rnImage}-${listingImg3.name}`).put(listingImg3);
            uploadlistingImg3.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${listingImg3.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   setlistingImg3Fix(fireBaseUrl);
                 })
              })
          }

          if(listingImg4 !== '') {
            const uploadlistingImg4 = storage.ref(`${storageURL}/${rnImage}-${listingImg4.name}`).put(listingImg4);
            uploadlistingImg4.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${listingImg4.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   setlistingImg4Fix(fireBaseUrl);
                 })
              })
          }

          if(listingImg5 !== '') {
            const uploadlistingImg5 = storage.ref(`${storageURL}/${rnImage}-${listingImg5.name}`).put(listingImg5);
            uploadlistingImg5.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${listingImg5.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   setlistingImg5Fix(fireBaseUrl);
                 })
              })
          }

          if(listingImg6 !== '') {
            const uploadlistingImg6 = storage.ref(`${storageURL}/${rnImage}-${listingImg6.name}`).put(listingImg6);
            uploadlistingImg6.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${listingImg6.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   setlistingImg6Fix(fireBaseUrl);
                 })
              })
          }

          if(listingImg7 !== '') {
            const uploadlistingImg7 = storage.ref(`${storageURL}/${rnImage}-${listingImg7.name}`).put(listingImg7);
            uploadlistingImg7.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${listingImg7.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   setlistingImg7Fix(fireBaseUrl);
                 })
              })
          }

          if(listingImg8 !== '') {
            const uploadlistingImg8 = storage.ref(`${storageURL}/${rnImage}-${listingImg8.name}`).put(listingImg8);
            uploadlistingImg8.on('state_changed', () => {
                storage.ref(storageURL).child(`${rnImage}-${listingImg8.name}`).getDownloadURL()
                 .then(fireBaseUrl => {
                   setlistingImg8Fix(fireBaseUrl);
                 })
              })
          }


          ///////////////////////
          // We submit the data to firebase
          ///////////////////////

          newListingDocument(
            user.userAuth.userId,
            airConditioning,
            bookTourLink,
            checkInDescription1,
            checkInDescription2,
            checkInDescription3,
            checkInDescription4,
            checkInDescription5,
            checkInDescription6,
            checkInImg1,
            checkInImg2,
            checkInImg3,
            checkInImg4,
            checkInImg5,
            checkInImg6,
            checkInPinCode,
            citiesCategory,
            country,
            depositFullHouse,
            depositPerRoom,
            electricity,
            furnished,
            imgMainFix,
            listingDescription,
            listingTitle,
            monthlyRentFullHouse,
            monthlyRentPerRoom,
            numberBathrooms,
            numberBedrooms,
            parking,
            pets,
            physicalAddress,
            postalAddress,
            smoking,
            squareFeet,
            state,
            unitType,
            videoTour,
            water,
            wifi,
            wifiPassword,
            wifiSSID,
            zipCode,
            listingImg1Fix,
            listingImg2Fix,
            listingImg3Fix,
            listingImg4Fix,
            listingImg5Fix,
            listingImg6Fix,
            listingImg7Fix,
            listingImg8Fix,
            `${year}/${month}/${date}`
          );

          setError(''); // CLean errors
          setSuccess('Your new listing was added successfully');
          fmMsg.scrollIntoView();
        }

        const cities = props.cities;
        const light = props.logo[0].light;
        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark" id="form-message">
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

                            {formError && (
                              <div className="col-lg-10 offset-lg-1">
                                <p className="alert alert-danger mx-auto" role="alert">
                                  {formError}
                                </p>
                              </div>
                            )}

                            {formSucc && (
                              <div className="col-lg-10 offset-lg-1">
                                <p className="alert alert-success mx-auto" role="alert">
                                  {formSucc}
                                </p>
                              </div>
                            )}

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
                                                    <label htmlFor="title" className="form-label">Title <span className="text-danger">*(required)</span></label>

                                                    <p className="font-italic">Just a simple title for the listing no "$1200 · Oasis House · 1 bed", instead a better title is just "Oasis House"</p>

                                                    <input value={listingTitle} onChange={handlelistingTitle} type="text" className="form-control" placeholder="Enter a descriptive title for the listing" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="desc" className="form-label">Long Description <span className="text-danger">*(required)</span></label>
                                                    <textarea onChange={handlelistingDescription} rows="12" className="form-control" placeholder="Enter as much information you think is needed for the listings">{listingDescription}</textarea>
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
                                                    <label htmlFor="title" className="form-label">House Square Feet (optional)</label>
                                                    <input value={squareFeet} onChange={handlesquareFeet} type="number" className="form-control" placeholder="This is optional - Only Numbers" />
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Montly Rent For The Full Unit <span className="text-danger">*(required)</span></label>

                                                    <div className="pricing-option-inputs">
                                                        <input value={monthlyRentFullHouse} onChange={handlemonthlyRentFullHouse} type="number" className="form-control" placeholder="Only Numbers Eg. 1000" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Deposit if Renting The Full Unit <span className="text-danger">*(required)</span></label>

                                                    <div className="pricing-option-inputs">
                                                        <input value={depositFullHouse} onChange={handledepositFullHouse} type="number" className="form-control" placeholder="Only Numbers Eg. 1000" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="form-label">Availability Date <span className="text-danger">*(required)</span></label>

                                                    <p className="font-italic">When is the unit available to be rented? (year/month/date)</p>

                                                    <div className="form-inline">
                                                      <select className="form-control mx-sm-4 mb-3" onChange={handleyear}>
                                                        <option value={d.getFullYear()}>{d.getFullYear()}</option>
                                                        <option value={d.getFullYear() + 1}>{d.getFullYear() + 1}</option>
                                                      </select>

                                                      <select className="form-control mx-sm-4 mb-3" onChange={handlemonth}>
                                                        <option value={d.getMonth() + 1}>{d.getMonth() + 1}</option>

                                                        <option> -- -- </option>

                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                      </select>

                                                      <select className="form-control mx-sm-4 mb-3" onChange={handledate}>
                                                        <option value={d.getDate()}>{d.getDate()}</option>

                                                        <option> -- -- </option>

                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                        <option value="9">9</option>
                                                        <option value="10">10</option>
                                                        <option value="11">11</option>
                                                        <option value="12">12</option>
                                                        <option value="13">13</option>
                                                        <option value="14">14</option>
                                                        <option value="15">15</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                        <option value="20">20</option>
                                                        <option value="21">21</option>
                                                        <option value="22">22</option>
                                                        <option value="23">23</option>
                                                        <option value="24">24</option>
                                                        <option value="25">25</option>
                                                        <option value="26">26</option>
                                                        <option value="27">27</option>
                                                        <option value="28">28</option>
                                                        <option value="29">29</option>
                                                        <option value="30">30</option>
                                                        <option value="31">31</option>
                                                      </select>
                                                    </div>
                                                </div>

                                                {
                                                    numberBedrooms !== '1' ? (

                                                    <div>
                                                      <h3>** Only fill this Section if you want to also rent this unit by the room (optional)</h3>
                                                      <br />
                                                      <div className="form-group">
                                                          <label className="form-label">Montly Rent Per Bedroom</label>

                                                          <div className="pricing-option-inputs">
                                                              <input value={monthlyRentPerRoom} onChange={handlemonthlyRentPerRoom} type="number" className="form-control" placeholder="Only Numbers Eg. 1000" />
                                                          </div>
                                                      </div>

                                                      <div className="form-group">
                                                          <label className="form-label">Deposit if Renting A Single Bedroom</label>

                                                          <div className="pricing-option-inputs">
                                                              <input value={depositPerRoom} onChange={handledepositPerRoom} type="number" className="form-control" placeholder="Only Numbers Eg. 1000" />
                                                          </div>
                                                      </div>
                                                    </div>

                                                ) : (
                                                    <span></span>
                                                  )
                                                }
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
                                                <label htmlFor="desc" className="form-label">Physical Address - do not include postal code or city/country <span className="text-danger">*(required)</span></label>
                                                <input value={physicalAddress} onChange={handlephysicalAddress} type="text" className="form-control" placeholder="Eg. 1410 Calle Georgetti" required />
                                            </div>

                                            {/*
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">Postal Address - do not include postal code or city/country <span className="text-danger">*(required)</span></label>
                                                <input value={postalAddress} onChange={handlepostalAddress} type="text" className="form-control" placeholder="Eg. 1410 Calle Georgetti" required />
                                            </div>
                                            */}
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">City <span className="text-danger">*(required)</span></label>
                                                <div className="select-basic">
                                                  <select className="form-control" onChange={handlecitiesCategory}>
                                                  <option selected>-- Select One --</option>
                                                  {

                                                      Object.values(cities).map((value, key) => {

                                                          const { city, tagLine } = value;
                                                          if( city !== '' ) {

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
                                                <label htmlFor="desc" className="form-label">State <span className="text-danger">*(required)</span></label>
                                                <select className="form-control" onChange={handlestate}>
                                                <option selected>-- Select One --</option>
                                                {
                                                    Object.values(cities).map((value, key) => {
                                                        const { state } = value;
                                                        if( state !== '' ) {
                                                          return (
                                                            <option value={state}>{state}</option>
                                                          )
                                                        }
                                                    })
                                                }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">Country <span className="text-danger">*(required)</span></label>
                                                <select className="form-control" onChange={handlecountry}>
                                                <option selected>-- Select One --</option>
                                                {
                                                    Object.values(cities).map((value, key) => {
                                                        const { country } = value;
                                                        if( country !== '' ) {
                                                          return (
                                                            <option value={country}>{country}</option>
                                                          )
                                                        }
                                                    })
                                                }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="desc" className="form-label">Zip Code <span className="text-danger">*(required)</span></label>
                                                <input value={zipCode} onChange={handlezipCode} type="text" className="form-control" placeholder="Eg. 00680" required />
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
                                                <div>
                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Description #1 <span className="text-danger">*(required)</span></label>
                                                    <textarea onChange={handlecheckInDescription1} rows="4" className="form-control" placeholder="Description #1">{checkInDescription1}</textarea>
                                                  </div>

                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Check In Image #1 - Ex. To show where the lockbox is located (optional)</label>

                                                    <input type="file" className="btn btn-sm" onChange={handlecheckInImg1} />
                                                  </div>
                                                </div>

                                                <br /><br />

                                                <div>
                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Description #2 (optional)</label>
                                                    <textarea onChange={handlecheckInDescription2} rows="4" className="form-control" placeholder="Description #2">{checkInDescription2}</textarea>
                                                  </div>

                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Check In Image #2 (optional)</label>

                                                    <input type="file" className="btn btn-sm" onChange={handlecheckInImg2} />
                                                  </div>
                                                </div>

                                                <br /><br />

                                                <div>
                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Description #3 (optional)</label>
                                                    <textarea onChange={handlecheckInDescription3} rows="4" className="form-control" placeholder="Description #3">{checkInDescription3}</textarea>
                                                  </div>

                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Check In Image #3 (optional)</label>

                                                    <input type="file" className="btn btn-sm" onChange={handlecheckInImg3} />
                                                  </div>
                                                </div>

                                                <br /><br />

                                                <div>
                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Description #4 (optional)</label>
                                                    <textarea onChange={handlecheckInDescription4} rows="4" className="form-control" placeholder="Description #4">{checkInDescription4}</textarea>
                                                  </div>

                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Check In Image #4 (optional)</label>

                                                    <input type="file" className="btn btn-sm" onChange={handlecheckInImg4} />
                                                  </div>
                                                </div>

                                                <br /><br />

                                                <div>
                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Description #5 (optional)</label>
                                                    <textarea onChange={handlecheckInDescription5} rows="4" className="form-control" placeholder="Description #5">{checkInDescription5}</textarea>
                                                  </div>

                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Check In Image #5 (optional)</label>

                                                    <input type="file" className="btn btn-sm" onChange={handlecheckInImg5} />
                                                  </div>
                                                </div>

                                                <br /><br />

                                                <div>
                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Description #6 (optional)</label>
                                                    <textarea onChange={handlecheckInDescription6} rows="4" className="form-control" placeholder="Description #6">{checkInDescription6}</textarea>
                                                  </div>

                                                  <div className="form-group">
                                                    <label htmlFor="address" className="form-label">Check In Image #6 (optional)</label>

                                                    <input type="file" className="btn btn-sm" onChange={handlecheckInImg6} />
                                                  </div>
                                                </div>

                                                <br /><br />

                                                <div className="form-group">
                                                    <label htmlFor="phone_number" className="form-label">Pin Code (optional)</label>
                                                    <input value={checkInPinCode} onChange={handlecheckInPinCode} type="text" placeholder="Pin Code" className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="contact_email" className="form-label">Wifi SSID (optional)</label>
                                                    <input value={wifiSSID} onChange={handlewifiSSID} type="text" className="form-control" placeholder="Enter SSID" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="website_address" className="form-label">Wifi Password (optional)</label>
                                                    <input value={wifiPassword} onChange={handlewifiPassword} type="text" className="form-control" placeholder="" />
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
                                            <label htmlFor="address" className="form-label">Main Listing Image <span className="text-danger">*(required)</span></label>

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
                                                <label className="form-label">Book Tour Link - Usually a link to calendly so people can book this unit (optional)</label>

                                                <div className="pricing-option-inputs">
                                                    <input value={bookTourLink} onChange={handlebookTourLink} type="text" className="form-control" placeholder="This is optional" />
                                                </div>
                                            </div>

                                            <div className="form-group m-top-30">
                                                <label htmlFor="videourl" className="not_empty form-label">Video Tour Url (option)</label>
                                                <input value={videoTour} onChange={handlevideoTour} type="text" id="videourl" name="videourl" className="form-control directory_field" placeholder="This is optional" />
                                            </div>
                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                    </div>{/*<!-- ends: .atbd_content_module -->*/}
                                </div>{/*<!-- ends: .col-lg-10 -->*/}
                                <div className="col-lg-10 offset-lg-1 text-center">
                                    <div className="btn_wrap list_submit m-top-25">
                                        <button onClick={handleSubmit} type="submit" className="btn btn-lg bg-dark-hb">Submit listing</button>
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
