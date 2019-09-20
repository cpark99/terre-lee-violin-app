import React, { Component } from 'react';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import weddingViolinist from '../../img/Wedding+VIolinist.jpg';
import './PrivateEvents.css';

export default class PrivateEvents extends Component {
  render() {
    return (
      <section id="private-events" className="container">
        <ScrollToTopOnMount />
        <h1 className="page-title">PRIVATE EVENTS</h1>
        <img
          className="main-image"
          src={weddingViolinist}
          alt="Terre Lee playing violin at a wedding, wedding couple dancing in background"
        />
        <h2 className="page-sub-title">LIVE MUSIC</h2>
        <p>
          Terre Lee is known for playing a variety of music with various ensembles. She plays
          classical, world, folk, and jazz. Terre's repertoire consists of the perfect music for
          your event's needs- whether it be upbeat, classy, or somber.
        </p>
        <p>
          Live music at your special event creates an atmosphere that is irreplaceable. There is
          nothing more ceremonious or celebratory than a unique live performance, customized to your
          preferences.
        </p>
        <p>Book Terre and friends for your wedding, memorial service, or party.</p>
      </section>
    );
  }
}
