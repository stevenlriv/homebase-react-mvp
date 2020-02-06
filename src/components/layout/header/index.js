import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from '../navbar/navItem';
import { connect } from 'react-redux';
import { LogOut } from '../../../Store/action/logoutAction';

class Header extends Component {
    render() {
      const user = this.props.user;

      const logdIn = () => {
        return this.props.isAuthenticated;
      }

        return (
            <Fragment>

                <div className={"menu-area menu1 "+this.props.class}>
                    <div className="top-menu-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="menu-fullwidth">
                                        <div className="logo-wrapper order-lg-0 order-sm-1">
                                            <div className="logo logo-top">
                                                <NavLink to="/"><img src={this.props.logo} alt="logoImage" className="img-fluid" /></NavLink>
                                            </div>
                                        </div>{/*<!-- ends: .logo-wrapper -->*/}
                                        <div className="menu-container order-lg-1 order-sm-0">
                                            <div className="d_menu">
                                                <nav className="navbar navbar-expand-lg mainmenu__menu">
                                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#direo-navbar-collapse" aria-controls="direo-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                                                        <span className="navbar-toggler-icon icon-menu"><i className="la la-reorder"></i></span>
                                                    </button>
                                                    {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
                                                    <div className="collapse navbar-collapse" id="direo-navbar-collapse">
                                                        <NavItem />
                                                    </div>
                                                    {/*<!-- /.navbar-collapse -->*/}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="menu-right order-lg-2 order-sm-2">
                                            {/*<!-- start .author-area -->*/}
                                            <div className="author-area">
                                                <div className="author__access_area">
                                                {/*<!-- start desktop view -->*/}
                                                {
                                                    !logdIn() ? (
                                                        <ul className="d-flex list-unstyled align-items-center">
                                                            <li>
                                                                <a href="#" className="access-link btn btn-xl bg-dark-hb font-weight-bold" data-toggle="modal" data-target="#login_modal">SIGN IN</a>
                                                            </li>
                                                        </ul>
                                                    ) : (
                                                        <ul className="d-flex list-unstyled align-items-center">
                                                            <li>
                                                                <div className="author-info">
                                                                    <a href="#" className="author-avatar">

                                                                            <img src="./assets/img/review-author-thumb.jpg" width="50px" height="50px" alt="AuthorImage" className="rounded-circle" />
                                                                    </a>
                                                                    <ul className="list-unstyled">
                                                                      <li><NavLink to="/profile">My Profile</NavLink></li>
                                                                      <li><NavLink to="/my-homebase">My Homebase</NavLink></li>
                                                                      <li><NavLink to="/" onClick={this.props.logOut}>Logout</NavLink></li>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    )
                                                }
                                                {/*<!-- end desktop view -->*/}

                                                </div>
                                            </div>

                                            {/*<!-- end .author-area -->*/}

                                            <div className={"offcanvas-menu d-none invisible"}>
                                                <a href=" " className="offcanvas-menu__user"><i className="la la-user"></i></a>

                                                {/*<!-- ends: .author-info -->*/}
                                            </div>{/*<!-- ends: .offcanvas-menu -->*/}
                                        </div>{/*<!-- ends: .menu-right -->*/}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- end /.row --> */}
                        </div>
                        {/* <!-- end /.container --> */}
                    </div>
                    {/* <!-- end  --> */}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.userAuth.isAuthenticated,
        user: state.userAuth.user,
        isLoggingOut: state.userAuth.isLoggingOut,
        logoutError: state.userAuth.logoutError
    };
};

const mapDispatchToProp = dispatch => {
    return {
        logOut : () => dispatch(LogOut())
    };
};

export default connect(mapStateToProps, mapDispatchToProp)(Header);
