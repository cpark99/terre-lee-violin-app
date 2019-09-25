import React, { useState, useRef, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useHover } from 'use-events';
import UserContext, { nullUser } from '../../context';
import { Breakpoint } from 'react-socks';
import TokenService from '../../services/token-service';
import './Nav.css';

export default function Nav(props) {
  const [showBookings, setShowBookings] = useState(false);
  const [showStudio, setShowStudio] = useState(false);
  const [isHovering, hoverProps] = useHover();
  const [studioIsHovering, studioHoverProps] = useHover();

  const bookingsRef = useRef();
  const studioRef = useRef();

  function toggleBookingsMenu() {
    if (showBookings === false) {
      setShowBookings(true);
    }
    if (showBookings === true) {
      setShowBookings(false);
    }
    if (showStudio === true) {
      setShowStudio(false);
    }
  }

  function toggleStudioMenu() {
    if (showStudio === false) {
      setShowStudio(true);
    }
    if (showStudio === true) {
      setShowStudio(false);
    }
    if (showBookings === true) {
      setShowBookings(false);
    }
  }

  function handleClose() {
    setShowBookings(false);
    setShowStudio(false);
  }

  function handleOutsideClick(e) {
    if (bookingsRef.current) {
      if (bookingsRef.current.contains(e.target)) {
        return;
      }
      if (studioRef.current.contains(e.target)) {
        return;
      }
      // outside
      handleClose();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function imageByLocation() {
    if (props.location.pathname === '/') {
      return 'main-nav nav-image';
    }
    if (props.location.pathname === '/what-we-do') {
      return 'what-we-do-nav nav-image';
    }
    if (props.location.pathname === '/lessons') {
      return 'lessons-nav nav-image';
    }
    if (props.location.pathname === '/new-students') {
      return 'new-students-nav nav-image';
    }
  }

  function headerByLocation() {
    if (props.location.pathname === '/' || props.location.pathname === '/what-we-do') {
      return 'main-header';
    }
    if (props.location.pathname === '/new-students') {
      return 'main-header';
    }
    if (props.location.pathname === '/lessons') {
      return 'main-header lessons-header';
    }
  }

  function dropdownByLocation() {
    if (props.location.pathname === '/contact' || props.location.pathname === '/login') {
      return 'nav-dropdown-desktop-small gray-container';
    } else if (props.location.pathname === '/apply' || props.location.pathname === '/suzuki') {
      return 'nav-dropdown-desktop-small gray-container';
    } else if (
      props.location.pathname === '/private-events' ||
      props.location.pathname === '/profile'
    ) {
      return 'nav-dropdown-desktop-small gray-container';
    } else if (props.location.pathname === '/success') {
      return 'nav-dropdown-desktop-small gray-container';
    } else if (props.location.pathname === '/lessons') {
      return 'nav-dropdown-desktop nav-lessons-dropdown-landscape gray-container';
    } else {
      return 'nav-dropdown-desktop gray-container';
    }
  }

  const context = useContext(UserContext);

  function handleLogoutClick() {
    TokenService.clearAuthToken();
    context.user = nullUser;
    handleClose();
  }

  return (
    <nav className={imageByLocation()}>
      <div id="nav-container">
        <header id="header" className={headerByLocation()}>
          <NavLink to="/" onClick={handleClose}>
            <h3>TERRE LEE</h3>
          </NavLink>
          <Breakpoint medLarge down>
            <UserContext.Consumer>
              {value => (
                <div
                  id={props.showNavMenu ? 'close' : 'hamburger'}
                  className="nav-item"
                  onClick={value.toggleSidebarNav}
                >
                  {props.showNavMenu ? (
                    <React.Fragment>&#215;</React.Fragment>
                  ) : (
                    <React.Fragment>&#9776;</React.Fragment>
                  )}
                </div>
              )}
            </UserContext.Consumer>
          </Breakpoint>
          <Breakpoint large up>
            <div id="nav-menu-desktop-container">
              <ul id="nav-menu-desktop">
                <li className="nav-menu-item">
                  <NavLink to="/" onClick={handleClose}>
                    <h5>TERRE LEE</h5>
                  </NavLink>
                </li>
                <li {...hoverProps} className="nav-menu-item" ref={bookingsRef}>
                  <h5 onClick={toggleBookingsMenu}>BOOKINGS</h5>
                  {(showBookings || isHovering) && (
                    <div id="bookings-dropdown-desktop" className={dropdownByLocation()}>
                      <NavLink to="/private-events" onClick={handleClose}>
                        <h5>PRIVATE EVENTS</h5>
                      </NavLink>
                    </div>
                  )}
                </li>
                <li {...studioHoverProps} className="nav-menu-item" ref={studioRef}>
                  <h5 onClick={toggleStudioMenu}>TEACHING STUDIO</h5>
                  {(showStudio || studioIsHovering) && (
                    <div id="studio-dropdown-desktop" className={dropdownByLocation()}>
                      <NavLink to="/what-we-do" onClick={handleClose}>
                        <h5>THE STUDIO</h5>
                      </NavLink>
                      <NavLink to="/lessons" onClick={handleClose}>
                        <h5>LESSONS</h5>
                      </NavLink>
                      <NavLink to="/new-students" onClick={handleClose}>
                        <h5>PROSPECTIVE STUDENTS</h5>
                      </NavLink>
                      <NavLink to="/suzuki" onClick={handleClose}>
                        <h5>SUZUKI METHOD</h5>
                      </NavLink>
                    </div>
                  )}
                </li>
                {TokenService.hasAuthToken() && (
                  <li className="nav-menu-item">
                    <NavLink to="/profile" onClick={handleClose}>
                      <h5>PROFILE</h5>
                    </NavLink>
                  </li>
                )}
                <li className="nav-menu-item">
                  {TokenService.hasAuthToken() ? (
                    <NavLink to="/" onClick={handleLogoutClick}>
                      <h5>LOGOUT</h5>
                    </NavLink>
                  ) : (
                    <NavLink to="/login" onClick={handleClose}>
                      <h5>LOGIN</h5>
                    </NavLink>
                  )}
                </li>
              </ul>
              <NavLink to="/apply" onClick={handleClose}>
                <button id="nav-menu-apply-button" className="nav-menu-item">
                  <h5 className="aqua-nav-button">APPLY</h5>
                </button>
              </NavLink>
              <NavLink to="/contact" onClick={handleClose}>
                <button id="nav-menu-contact-button" className="">
                  <h5 id="contact-nav-button">CONTACT</h5>
                </button>
              </NavLink>
            </div>
          </Breakpoint>
        </header>
      </div>
    </nav>
  );
}
