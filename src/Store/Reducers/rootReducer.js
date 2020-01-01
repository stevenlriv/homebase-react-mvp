import {combineReducers} from 'redux';
import catReducer from './catReducer';
import listReducer from './listingReducer';
import {
  listingsReducer,
  homelistingsReducer 
} from './listingsReducer';
import placeReducer from './placeReducer';
import testiReducer from './testiReducer';
import clientReducer from './clientReducer';
import galleryReducer from './galleryReducer';
import gallery2Reducer from './gallery2Reducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import logoReducer from './logoReducer';

const rootReducer = combineReducers({
    category: catReducer,
    list: listReducer,
    listings: listingsReducer,
    homeListings: homelistingsReducer,
    place: placeReducer,
    testimonial: testiReducer,
    client: clientReducer,
    gallery: galleryReducer,
    gallery2: gallery2Reducer,
    users: usersReducer,
    userAuth: authReducer,
    logo: logoReducer,
});
export default rootReducer;
