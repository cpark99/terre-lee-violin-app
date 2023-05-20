import React, { Component } from 'react';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import homeMainOne from '../../../img/terre-violin-5-19.jpg';
import './Maintenance.css';

export default class Maintenance extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="maintenance" className="container">
					<ScrollToTopOnMount />
					<header id="header"></header>
					<h1>Thanks for coming to my page.</h1>
					<h2>Website Coming soon!</h2>
					<p>In the meantime, get in touch on Instagram (
						<a href="https://www.instagram.com/terreleeviolin/" className="text-link" target="_blank" rel="noopener noreferrer" aria-label="open Instagram page">@terreleeviolin</a>
						) or send me an email at 
						<a href="mailto:tleeviolin@gmail.com" className="text-email">  tleeviolin@gmail.com</a>.
					</p>
					<img className='homepage-image centered' src={homeMainOne} alt="Terre playing violin on a beach" />
        </section>
      </React.Fragment>
    );
  }
}
