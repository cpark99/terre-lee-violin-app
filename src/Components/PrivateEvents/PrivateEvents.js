import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import weddingViolinist from '../../img/Wedding+VIolinist.jpg';
import { Breakpoint } from 'react-socks';
import BookingsDropdownList from '../BookingsDropdownList/BookingsDropdownList';
import './PrivateEvents.css';

export default function PrivateEvents(props) {
  useEffect(() => {
    document.title = 'Private Events | Terre Lee';
  });

  return (
    <section id="private-events" className="container flex-responsive-landscape">
      <ScrollToTopOnMount />
      <Breakpoint smallMed up>
        <div id="lessons-menu-desktop" className="page-menu-desktop">
          <h2>Bookings</h2>
          <BookingsDropdownList location={props.location} />
        </div>
      </Breakpoint>
      <div id="private-events-information" className="responsive-column-landscape">
        <h1 id="private-events-title" className="page-title">
          PRIVATE EVENTS
        </h1>
        <img
          id="private-events-picture"
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
        <p>
          <NavLink to="/contact">Book</NavLink> Terre and friends for your wedding, memorial
          service, or party.
        </p>
      </div>
    </section>
  );
}
