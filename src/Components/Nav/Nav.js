import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav(props) {
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
    if (props.location.pathname === '/lessons' || props.location.pathname === '/new-students') {
      return 'main-header';
    }
    if (props.location.pathname === '/suzuki method') {
      return 'main-header';
    }
  }

  function handleClick(e) {
    console.log('clicked');
  }

  return (
    <nav className={imageByLocation()}>
      <div id="nav-container">
        <header id="header" className={headerByLocation()}>
          <NavLink to="/">
            <h3>TERRE LEE</h3>
          </NavLink>
          <div
            id="hamburger"
            className="nav-item"
            onClick={() => {
              handleClick();
            }}
          >
            &#9776;
          </div>
        </header>
      </div>
    </nav>
  );
}
