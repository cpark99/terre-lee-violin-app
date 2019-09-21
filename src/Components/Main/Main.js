import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import springOne from '../../img/EB2019-SpringRecital-8443.jpg';
import springTwo from '../../img/violinpiano.jpg';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import './Main.css';

export default function Main() {
  useEffect(() => {
    document.title = 'Terre Lee Violin';
  });

  return (
    <div id="main-container" className="container">
      <ScrollToTopOnMount />
      <section id="introduction">
        <h1>TERRE LEE</h1>
        <p>
          Terre Lee is a performing violinist and teacher, specializing in early childhood music
          education. Her teaching emphasizes family involvement, Suzuki Method, ear-training, and
          building a strong foundation for creating beautiful tone. Terre teaches privately in her
          studio in Santa Cruz, California.
        </p>
        <p>
          A professional free lance violinist, Terre also plays for symphonies, private events,
          recordings, and more.
        </p>
        <NavLink to="/apply">
          <button>Apply Now</button>
        </NavLink>
        <div className="flex-responsive-landscape">
          <div id="teaching-studio" className="main-sub-section flex-column-center-center">
            <img
              className="main-image"
              src={springOne}
              alt="spring recital students, black and white"
            />
            <h2>TEACHING STUDIO</h2>
            <p>Find out about the Suzuki Method, studio policies, and more.</p>
            <NavLink to="/what-we-do">Learn More →</NavLink>
          </div>
          <div id="bookings" className="main-sub-section flex-column-center-center">
            <img className="main-image" src={springTwo} alt="violin with piano in background" />
            <h2>BOOKINGS</h2>
            <p>
              Terre's projects, private events- weddings, memorials, private parties, recordings,
              and more...
            </p>
            <NavLink to="/private-events">Find Out How →</NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
