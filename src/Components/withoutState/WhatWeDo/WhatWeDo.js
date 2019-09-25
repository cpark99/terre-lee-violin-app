import React, { useEffect } from 'react';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import studentOne from '../../img/IMG_E2975.jpg';
import studentTwo from '../../img/EB2019-SpringRecital-8775.jpg';
import studentThree from '../../img/EB2019-SpringRecital-8716.jpg';
import StudioDropdown from '../../withState/StudioDropdown/StudioDropdown';
import { Breakpoint } from 'react-socks';
import StudioDropdownList from '../StudioDropdownList/StudioDropdownList';
import './WhatWeDo.css';

export default function WhatWeDo(props) {
  useEffect(() => {
    document.title = 'What We Do | Terre Lee';
  });

  return (
    <section id="what-we-do" className="container">
      <ScrollToTopOnMount />
      <Breakpoint small down>
        <StudioDropdown location={props.location} />
      </Breakpoint>
      <Breakpoint smallMed up>
        <div id="studio-menu-desktop" className="page-menu-desktop">
          <h2>Teaching Studio</h2>
          <StudioDropdownList location={props.location} />
        </div>
      </Breakpoint>
      <div id="studio-information">
        <h1 className="page-title">THE VIOLIN STUDIO</h1>
        <p>
          At Terre's Suzuki violin studio, students as young as 2 engage in a playful, whole brain
          activity that creates a strong musical foundation & trains the body to play with ease.
        </p>
        <p>Together, we celebrate</p>
        <ul id="what-we-celebrate-list">
          <li>
            <p>Individualized learning</p>
          </li>
          <li>
            <p>Parent/family involvement</p>
          </li>
          <li>
            <p>Group learning with peers</p>
          </li>
        </ul>
        <p>
          The child is immersed in an environment of positivity, encouragement, and learns to play
          with technical ease and beautiful tone.
        </p>
        <p>
          The violin studio is centrally located in a residential neighborhood in Santa Cruz,
          California.
        </p>
      </div>
      <div id="studio-images" className="flex-column-center">
        <span className="blockquote-quote">"</span>
        <blockquote>“Beautiful tone, beautiful heart.” - Dr. Shinichi Suzuki</blockquote>
        <img className="main-image" src={studentOne} alt="student learing to play violin" />
        <img className="main-image" src={studentTwo} alt="student playing violin" />
        <img
          className="main-image"
          src={studentThree}
          alt="Terre Lee teaching student how to play a violin"
        />
      </div>
    </section>
  );
}
