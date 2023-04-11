import React from 'react'


import { NavLink } from 'react-router-dom';

import './style/vendors/ti-icons/css/themify-icons.css';
import './style/vendors/base/vendor.bundle.base.css';
import './style/css/style.css';

import logo from './style/images/logo.svg';
import profile from './style/images/faces/face28.jpg';

const Navbar = () => {
    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <NavLink className="navbar-brand brand-logo me-5" to="/dashboard"><img src={logo} className="me-2" alt="logo" /></NavLink>
                <NavLink className="navbar-brand brand-logo-mini" to="/dashboard"><img src="images/logo-mini.svg" alt="logo" /></NavLink>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize" fdprocessedid="0r55p">
                    <span className="ti-view-list"></span>
                </button>
                <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-search d-none d-lg-block">
                        <div className="input-group">
                            <div className="input-group-prepend hover-cursor mr-2" id="navbar-search-icon">
                                <span className="input-group-text" id="search">
                                    <i className="ti-search"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" fdprocessedid="unrdko" />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown me-1">
                        <NavLink className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" to="#" data-bs-toggle="dropdown">
                            <i className="ti-email mx-0"></i>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="messageDropdown">
                            <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                            <NavLink className="dropdown-item">
                                <div className="item-thumbnail">
                                    <img src="images/faces/face4.jpg" alt="image" className="profile-pic" />
                                </div>
                                <div className="item-content flex-grow">
                                    <h6 className="ellipsis font-weight-normal">David Grey
                                    </h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        The meeting is cancelled
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink className="dropdown-item">
                                <div className="item-thumbnail">
                                    <img src="images/faces/face2.jpg" alt="image" className="profile-pic" />
                                </div>
                                <div className="item-content flex-grow">
                                    <h6 className="ellipsis font-weight-normal">Tim Cook
                                    </h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        New product launch
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink className="dropdown-item">
                                <div className="item-thumbnail">
                                    <img src="images/faces/face3.jpg" alt="image" className="profile-pic" />
                                </div>
                                <div className="item-content flex-grow">
                                    <h6 className="ellipsis font-weight-normal"> Johnson
                                    </h6>
                                    <p className="font-weight-light small-text text-muted mb-0">
                                        Upcoming board meeting
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" to="#" data-bs-toggle="dropdown">
                            <i className="ti-bell mx-0"></i>
                            <span className="count"></span>
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                            <NavLink className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-success">
                                        <i className="ti-info-alt mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">Application Error</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        Just now
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-warning">
                                        <i className="ti-settings mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">Settings</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        Private message
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-info">
                                        <i className="ti-user mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">New user registration</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        2 days ago
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </li>
                    <li className="nav-item nav-profile dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" id="profileDropdown">
                            <img src={profile} alt="profile" />
                        </NavLink>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <NavLink className="dropdown-item">
                                <i className="ti-settings text-primary"></i>
                                Settings
                            </NavLink>
                            <NavLink className="dropdown-item">
                                <i className="ti-power-off text-primary"></i>
                                Logout
                            </NavLink>
                        </div>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="ti-view-list"></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar