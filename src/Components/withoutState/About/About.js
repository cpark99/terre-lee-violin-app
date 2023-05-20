import React, { Component } from 'react';
import homeMainOne from '../../../img/terre-violin-5-19.jpg';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="container">
					<h1>About Terre Lee</h1>
					<p>Terre Lee is a violinist based in California's Bay Area. As a freelance classical musician, she performs with symphonies and chamber groups throughout the region. In addition to her classical work, Terre also plays a variety of other genres; her interests have led to international travels, including Morocco, where she performs with the Moroccan band, AZA. She also tours internationally with 5 time grammy nominee, David Arkenstone.</p>
					<p>For Terre, music is a means of connecting with people and cultures around the world. She is always eager to learn from other musicians and to explore new musical traditions through travel and performance. In addition to her performing career, Terre is also expanding her skills in music technology.</p>
					<p>As a dedicated educator, Terre is passionate about sharing her love of music with students of all ages. She brings a patient, encouraging approach to teaching and strives to help each student reach their full potential. Whether performing on stage or teaching, Terre is committed to excellence and to bringing beauty into the world.</p>
					<img className='homepage-image centered' src={homeMainOne} alt="Terre playing violin on a beach" />
        </section>
      </React.Fragment>
    );
  }
}
