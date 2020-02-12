import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import ProtectedRoute from "./protectedRoute";

import Index from './page/index';
import AllListingGrid from './page/all-listing-grid';
import AllListingList from './page/all-listing-list';
import ListingDetails from './page/listing-details';
import Category from './page/all-categoris';
import Location from './page/all-location';
import Pricing from './page/pricing-plan';
import Faq from './page/faq';
import CitiesNotAvailable from './page/cities-notavailable';
import Privacy from './page/privacy';
import Terms from './page/terms';
import About from './page/about';
import ForOwners from './page/for-owners';
import Living from './page/living';
import Membership from './page/membership';
import Contact from './page/contact';
import AuthProfile from './page/auth-profile';
import AuthDeshbord from './page/auth-deshbord';
import AuthDeshbordProfile from './page/edit-profile';
import AdminDashbord from './page/admin-dashboard';
import CheckoutBasic from './page/checkout-basic';
import Invoice from './page/invoice';
import AddListing from './page/add-listing';
import SignUp from './page/sign-up';
import RecoverPassword from './page/recover-password';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Router basename={process.env.PUBLIC_URL} >
        <Switch>
        {/* To be removed or edited */}
        <Route path = '/all-listings-grid' component = { AllListingGrid } />
        <Route path = '/all-locations' component = { Location } />
        <Route path = '/pricing-plans' component = { Pricing } />

          <Route exact path = '/' component = { Index } />
          <Route path = '/all-listings-list' component = { AllListingList } />
          <Route path = '/listing-details:id' component = { ListingDetails } />
          <Route path = '/find-a-homebase' component = { Category } />
          <Route path = '/faqs' component = { Faq } />
          <Route path = '/membership' component = { Membership } />
          <Route path = '/living-in-homebase' component = { Living } />
          <Route path = '/terms' component = { Terms } />
          <Route path = '/privacy' component = { Privacy } />
          {/*<Route path = '/about' component = { About } />*/}
          <Route path = '/for-owners' component = { ForOwners } />
          <Route path = '/contact' component = { Contact } />
          <Route path = '/sign-up' component = { SignUp } />
          <Route path = '/recover-password' component = { RecoverPassword } />

          {/* Cities Router */}
          <Route path = '/cities/san-francisco' component = { CitiesNotAvailable } />
          <Route path = '/cities/santiago' component = { CitiesNotAvailable } />

          {/* Only Access to a log-in user */}
          <ProtectedRoute
            exact
            path="/add-listing"
            component={AddListing}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />

          <ProtectedRoute
            exact
            path="/profile"
            component={AuthProfile}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />

          <ProtectedRoute
            exact
            path="/my-homebase"
            component={AuthDeshbord}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />

          <ProtectedRoute
            exact
            path="/edit-profile"
            component={AuthDeshbordProfile}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />

          {/* To be removed or edited */}
          <ProtectedRoute
            exact
            path="/checkout"
            component={CheckoutBasic}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />

          <ProtectedRoute
            exact
            path="/invoice"
            component={Invoice}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />

          {/* Admin Pages */}
          <ProtectedRoute
            exact
            path="/admin-dashboard"
            component={AdminDashbord}
            isAuthenticated={isAuthenticated}
            isVerifying={isVerifying}
          />
        </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.userAuth.isAuthenticated,
    isVerifying: state.userAuth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
