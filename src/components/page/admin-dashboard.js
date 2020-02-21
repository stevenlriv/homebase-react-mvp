import React, {Fragment, Component} from 'react';
import Header from '../layout/header';
import { Footer } from '../layout/footer';
import { BreadcrumbWraper } from '../content/element/breadcrumb';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogOut } from '../../Store/action/logoutAction';

const noAction = e => e.preventDefault();

class AdminDashbord extends Component {
    render () {
        const user = this.props.user;

        // Verify if the user is an admin, if not reddirect away
        if( user.userData.type !== "admin" ) return <Redirect to="/my-homebase"  />;

        const logdIn = () => {
            return this.props.isAuthenticated;
        }
        const light = this.props.logo[0].light;

        return (
            <Fragment>
                {/* Header section start */}
                <section className="header-breadcrumb bgimage overlay overlay--dark">
                    <div className="mainmenu-wrapper">
                        <Header logo={light} class="menu--light" />
                    </div>
                    {/* <!-- ends: .mainmenu-wrapper --> */}
                    <BreadcrumbWraper title="Admin Dashboard" />
                </section>
                {/* Header section end */}

                {
                    logdIn() !== null ? (
                        <section className="dashboard-wrapper section-bg p-bottom-70">

                            <div className="dashboard-nav">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="dashboard-nav-area">
                                                <ul className="nav" id="dashboard-tabs" role="tablist">
                                                  <li className="nav-item">
                                                    <a className="nav-link active" id="faborite-listings" data-toggle="tab" href="#favorite" role="tab" aria-controls="favorite" aria-selected="false">Listings</a>
                                                  </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Other Tabs</a>
                                                    </li>
                                                </ul>
                                                <div className="nav_button">
                                                    <NavLink to="/add-listing" className="btn bg-hb-orange bg-hb-dark-hover text-white"><span className="la la-plus"></span> Add Listing</NavLink>
                                                    <NavLink to="/" onClick={this.props.logOut} className="btn bg-dark-hb">Log Out</NavLink>
                                                </div>
                                            </div>
                                        </div>{/*<!-- ends: .col-lg-12 -->*/}
                                    </div>
                                </div>
                            </div>{/*<!-- ends: .dashboard-nav -->*/}
                            <div className="tab-content p-top-100" id="dashboard-tabs-content">
                                <div className="tab-pane fade p-bottom-30" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="container">
                                        <div className="row">

                                            <div className="col-lg-9 col-md-8">
                                                <div className="atbd_author_module">

                                                </div>{/*<!-- ends: .atbd_author_module -->*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                                <div className="tab-pane fade p-bottom-30 show active" id="favorite" role="tabpanel" aria-labelledby="faborite-listings">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="atbd_saved_items_wrapper">
                                                    <div className="atbd_content_module">
                                                        <div className="atbd_content_module__tittle_area">
                                                            <div className="atbd_area_title">
                                                                <h4><span className="la la-list"></span>Homebase Listings</h4>
                                                            </div>
                                                        </div>
                                                        <div className="atbdb_content_module_contents">
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <thead>
                                                                        <tr>
                                                                            <th scope="col">Homebase Name</th>
                                                                            <th scope="col">Address</th>
                                                                            <th></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td><NavLink to="/at_demo" onClick={noAction}>Double Broccoli Quinoa</NavLink></td>
                                                                            <td><span className="la la-glass"></span> <NavLink to="/at_demo" onClick={noAction}>Restaurant</NavLink></td>
                                                                            <td><NavLink to="/at_demo" onClick={noAction} className="remove-favorite"><span className="la la-times"></span></NavLink></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><NavLink to="/at_demo" onClick={noAction}>Easy Brazillian Cheese Bread</NavLink></td>
                                                                            <td><span className="la la-glass"></span> <NavLink to="/at_demo" onClick={noAction}>Restaurant</NavLink></td>
                                                                            <td><NavLink to="/at_demo" onClick={noAction} className="remove-favorite"><span className="la la-times"></span></NavLink></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><NavLink to="/at_demo" onClick={noAction}>Hilton Hawaiian Village</NavLink></td>
                                                                            <td><span className="la la-bed"></span> <NavLink to="/at_demo" onClick={noAction}>Hotel</NavLink></td>
                                                                            <td><NavLink to="/at_demo" onClick={noAction} className="remove-favorite"><span className="la la-times"></span></NavLink></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>{/*<!-- ends: .atbdb_content_module_contents -->*/}
                                                    </div>
                                                </div>{/*<!--  ends: .atbd_saved_items_wrapper -->*/}
                                            </div>{/*<!-- ends: .col-lg-12 -->*/}
                                        </div>
                                    </div>
                                </div>{/*<!-- ends: .tab-pane -->*/}
                            </div>
                        </section>
                    ) : (
                        <section className="dashboard-wrapper section-bg p-bottom-70 p-top-70">
                            <div className="container">
                                <div className="alert alert-danger" role="alert">
                                    Please login First..............!
                                </div>
                            </div>
                        </section>
                    )
                }

               <Footer />
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.userAuth.user,
        list: state.list,
        isAuthenticated: state.userAuth.isAuthenticated,
        logo: state.logo
    }
}
const mapDispatchToProp = dispatch => {
    return {
        logOut : () => dispatch(LogOut())
    };
};
export default connect(mapStateToProps, mapDispatchToProp)(AdminDashbord);
