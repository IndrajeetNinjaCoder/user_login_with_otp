import React from 'react'



import { NavLink } from 'react-router-dom';

import './style/vendors/ti-icons/css/themify-icons.css';
import './style/vendors/base/vendor.bundle.base.css';
import './style/css/style.css';

import logo from './style/images/logo.svg';
import profile from './style/images/faces/face28.jpg';


const Sidebar = (props) => {

  const activeLink = props.activeLink;

  let dashboard = "";
  let formElements = "";
  let charts = "";
  let tables = "";
  let icons = "";



  if (activeLink === 'dashboard') {
    dashboard = 'active'
  } else if (activeLink === 'formElements') {
    formElements = 'active'
  } if (activeLink === 'charts') {
    charts = 'active'
  } if (activeLink === 'tables') {
    tables = 'active'
  } if (activeLink === 'icons') {
    icons = 'active'
  }




  return (
    <>

      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className={`nav-item ${dashboard}`}>
            <NavLink className="nav-link" to="/dashboard">
              <i className="ti-shield menu-icon"></i>
              <span className="menu-title">Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-bs-toggle="collapse" to="#" aria-expanded="false" aria-controls="ui-basic">
              <i className="ti-palette menu-icon"></i>
              <span className="menu-title">UI Elements</span>
              <i className="menu-arrow"></i>
            </NavLink>

          </li>
          <li className={`nav-item ${formElements}`}>
            <NavLink className="nav-link" to="/dashboard/formelements">
              <i className="ti-layout-list-post menu-icon"></i>
              <span className="menu-title">Form elements</span>
            </NavLink>
          </li>
          <li className={`nav-item ${charts}`}>
            <NavLink className="nav-link" to="/dashboard/charts">
              <i className="ti-pie-chart menu-icon"></i>
              <span className="menu-title">Charts</span>
            </NavLink>
          </li>
          <li className={`nav-item ${tables}`}>
            <NavLink className="nav-link" to="/dashboard/tables">
              <i className="ti-view-list-alt menu-icon"></i>
              <span className="menu-title">Tables</span>
            </NavLink>
          </li>
          <li className={`nav-item ${icons}`}>
            <NavLink className="nav-link" to="/dashboard/icons">
              <i className="ti-star menu-icon"></i>
              <span className="menu-title">Icons</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-bs-toggle="collapse" to="#" aria-expanded="false" aria-controls="auth">
              <i className="ti-user menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </NavLink>

          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard/documentation">
              <i className="ti-write menu-icon"></i>
              <span className="menu-title">Documentation</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar