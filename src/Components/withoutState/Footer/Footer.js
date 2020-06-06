import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="pre-footer"></div>
        <footer id="footer" className="flex-column-center-center" role="contentinfo">
          <a href="#header">BACK TO TOP</a>
          <p className="no-margin-bottom">All Rights Reserved.</p>
          <p className="italic no-margin-top">
            *This app was developed by <a href="https:realitiesatwork.com>RealitiesAtWork.com</a>
          </p>
        </footer>
      </React.Fragment>
    );
  }
}
