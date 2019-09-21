import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

  return (
    <section id="sidebar-nav-menu">
      <NavLink to="/" onClick={handleClose}>
        <h5>TERRE LEE</h5>
      </NavLink>
      <h5 id="bookings-menu" onClick={toggleBookingsMenu}>
        {showBookings ? <span>-&nbsp;</span> : '+'} BOOKINGS
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
        {showStudio ? <span>-&nbsp;</span> : '+'} TEACHING STUDIO
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
            <NavLink to="/suzuki-method" onClick={handleClose}>
              <h5>SUZUKI METHOD</h5>
            </NavLink>
          </li>
        </ul>
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
