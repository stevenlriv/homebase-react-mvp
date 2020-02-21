import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogOut } from '../../../Store/action/logoutAction';

class NavItem extends Component {
    render() {

      const logdIn = () => {
        return this.props.isAuthenticated
      }

      const userMenu = () => {
        if (!logdIn()) {
          return (
            <li className="dropdown has_dropdown d-xl-none">
              <a href="#sign" className="access-link" data-toggle="modal" data-target="#login_modal">Sign In</a>
            </li>
          )
        } else {
          return (
            <li className="dropdown has_dropdown d-xl-none">
                <a className="dropdown-toggle" href="# " id="drop1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Your Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="drop1">
                  <li><NavLink to="/profile">My Profile</NavLink></li>
                  <li><NavLink to="/my-homebase">My Homebase</NavLink></li>
                  <li><NavLink to="/" onClick={this.props.logOut}>Logout</NavLink></li>
                </ul>
            </li>
          )
        }
      }

        return (
            <Fragment>
                <ul className="navbar-nav">
                    <li>
                        <NavLink to="/find-a-homebase">Find a Homebase</NavLink>
                    </li>
                    <li>
                        <NavLink to="/living-in-homebase">Living in Homebase</NavLink>
                    </li>

                    {/*<!-- only displayed on mobile - user desktop menu on header/index.js -->*/}
                    { userMenu() }
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.userAuth.isAuthenticated,

        isLoggingOut: state.userAuth.isLoggingOut,
        logoutError: state.userAuth.logoutError
    };
};

const mapDispatchToProp = dispatch => {
    return {
        logOut : () => dispatch(LogOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProp)(NavItem);
