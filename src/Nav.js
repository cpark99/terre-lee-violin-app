import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  imageByLocation = () => {
    if (this.props.location.pathname === '/') {
      return 'main-nav nav-image';
    }
    if (this.props.location.pathname === '/what-we-do') {
      return 'what-we-do-nav nav-image';
    }
    if (this.props.location.pathname === '/lessons') {
      return 'lessons-nav nav-image';
    }
    if (this.props.location.pathname === '/new-students') {
      return 'new-students-nav nav-image';
    }
  };

  headerByLocation = () => {
    if (this.props.location.pathname === '/' || this.props.location.pathname === '/what-we-do') {
      return 'main-header';
    }
    if (
      this.props.location.pathname === '/lessons' ||
      this.props.location.pathname === '/new-students'
    ) {
      return 'main-header';
    }
    if (this.props.location.pathname === '/suzuki method') {
      return 'main-header';
    }
  };

  render() {
    return (
      <nav className={this.imageByLocation()}>
        <div id="nav-container">
          <header id="header" className={this.headerByLocation()}>
            <NavLink to="/">
              <h3>TERRE LEE</h3>
            </NavLink>
            <div
              id="hamburger"
              className="nav-item"
              onClick={() => {
                this.handleClick();
              }}
            >
              &#9776;
            </div>
          </header>
        </div>
      </nav>
    );
  }
}
