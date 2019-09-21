import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="pre-footer"></div>
        <footer id="footer" className="flex-column-center-center" role="contentinfo">
          <a href="#header">BACK TO TOP</a>
          <p className="italic">*This app was developed by cpwebdeveloper99@gmail.com</p>
        </footer>
      </React.Fragment>
    );
  }
}