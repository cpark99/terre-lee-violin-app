import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div id="nav-container">
          <header>
            <h3>Terre Lee</h3>
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
