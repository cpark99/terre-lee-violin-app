import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import TokenService from '../../../services/token-service';
import UserContext, { nullUser } from '../../../context';
import './Sidebar.css';

export default function Sidebar(props) {
  const [showBookings, setShowBookings] = useState(false);
  const [showStudio, setShowStudio] = useState(false);

  function toggleBookingsMenu() {
    if (showBookings === false) {
      setShowBookings(true);
    }
    if (showBookings === true) {
      setShowBookings(false);
    }
  }

  function toggleStudioMenu() {
    if (showStudio === false) {
      setShowStudio(true);
    }
    if (showStudio === true) {
      setShowStudio(false);
    }
  }

  function handleClose() {
    setShowBookings(false);
    setShowStudio(false);
    props.closeNavMenu();
  }

  const context = useContext(UserContext);

  function handleLogoutClick() {
    TokenService.clearAuthToken();
    context.user = nullUser;
    handleClose();
  }

  return (
    <section id="sidebar-nav-menu">
      <div id="nav-header">
        <NavLink to="/" onClick={handleClose}>
          <h5>TERRE LEE</h5>
        </NavLink>
        <p>
          {TokenService.hasAuthToken() ? (
            <NavLink to="/" onClick={handleLogoutClick}>
              LOGOUT
            </NavLink>
          ) : (
            <NavLink to="/login" onClick={handleClose}>
              LOGIN
            </NavLink>
          )}
        </p>
      </div>
      <h5 id="bookings-menu" onClick={toggleBookingsMenu}>
        {showBookings ? <span>-</span> : '+'} BOOKINGS
      </h5>
      {showBookings && (
        <ul id="bookings-dropdown" className="nav-menu-dropdown-list">
          <li className="bookings-item nav-menu-dropdown-item">
            <NavLink to="/private-events" onClick={handleClose}>
              <h5>PRIVATE EVENTS</h5>
            </NavLink>
          </li>
        </ul>
      )}
      <h5 id="studio-menu" onClick={toggleStudioMenu}>
        {showStudio ? <span>-</span> : '+'} TEACHING STUDIO
      </h5>
      {showStudio && (
        <ul id="studio-dropdown" className="nav-menu-dropdown-list">
          <li className="studio-item nav-menu-dropdown-item">
            <NavLink to="/what-we-do" onClick={handleClose}>
              <h5>THE STUDIO</h5>
            </NavLink>
          </li>
          <li className="studio-item nav-menu-dropdown-item">
            <NavLink to="/lessons" onClick={handleClose}>
              <h5>LESSONS</h5>
            </NavLink>
          </li>
          <li className="studio-item nav-menu-dropdown-item">
            <NavLink to="/new-students" onClick={handleClose}>
              <h5>PROSPECTIVE STUDENTS</h5>
            </NavLink>
          </li>
          <li className="studio-item nav-menu-dropdown-item">
            <NavLink to="/suzuki" onClick={handleClose}>
              <h5>SUZUKI METHOD</h5>
            </NavLink>
          </li>
        </ul>
      )}
      {TokenService.hasAuthToken() && (
        <h5 id="profile-menu">
          <NavLink to="/profile" onClick={handleClose}>
            <h5>PROFILE</h5>
          </NavLink>
        </h5>
      )}
      <NavLink to="/apply" onClick={handleClose}>
        <button id="nav-menu-apply-button" onClick={handleClose}>
          <h5 className="aqua-nav-button">APPLY</h5>
        </button>
      </NavLink>
      <NavLink to="/contact" onClick={handleClose}>
        <button id="nav-menu-contact-button" onClick={handleClose}>
          <h5 id="contact-nav-button">CONTACT</h5>
        </button>
      </NavLink>
    </section>
  );
}
