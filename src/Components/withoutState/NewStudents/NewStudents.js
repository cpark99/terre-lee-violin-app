import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import StudioDropdown from '../../withState/StudioDropdown/StudioDropdown';
import { Breakpoint } from 'react-socks';
import StudioDropdownList from '../StudioDropdownList/StudioDropdownList';
import './NewStudents.css';

export default function NewStudents(props) {
  useEffect(() => {
    document.title = 'Prospective Students | Terre Lee';
  });

  return (
    <section id="new-students" className="container flex-responsive-landscape">
      <ScrollToTopOnMount />
      <Breakpoint small down>
        <StudioDropdown location={props.location} />
      </Breakpoint>
      <Breakpoint smallMed up>
        <div id="new-student-menu-desktop" className="page-menu-desktop">
          <h2>Teaching Studio</h2>
          <StudioDropdownList location={props.location} />
        </div>
      </Breakpoint>
      <div id="new-students-information" className="responsive-column-landscape">
        <h1 className="page-title">WHY VIOLIN?</h1>
        <p>
          With learning an instrument, we learn to play a beautiful instrument and to appreciate
          artistry. Also, we learn to cultivate many life qualities. Among these qualities are:
        </p>
        <ul id="what-we-celebrate-list">
          <li>
            <p>Confidence</p>
          </li>
          <li>
            <p>Creative problem solving</p>
          </li>
          <li>
            <p>Leadership</p>
          </li>
          <li>
            <p>Body awareness (posture, dexterity)</p>
          </li>
          <li>
            <p>Collaboration</p>
          </li>
          <li>
            <p>Time management</p>
          </li>
          <li>
            <p>Breathing and working through moments of frustration</p>
          </li>
          <li>
            <p>Respect for ourselves, each other, and community</p>
          </li>
        </ul>
        <NavLink to="/apply">
          <button className="to-application-button">CLICK TO APPLY</button>
        </NavLink>
        <h2 className="page-sub-title">TO APPLY</h2>
        <p>
          Please submit an <NavLink to="/apply">application</NavLink> if you would like to apply.
          The application process will be a phone interview, an observation of a private lesson &
          group class, and a follow up phone call.
        </p>
        <p>
          Students who are not yet ready to begin lessons, but want to learn are welcome to observe
          lessons for as long as they need before being ready.
        </p>
        <NavLink to="/apply">
          <button className="to-application-button">CLICK TO APPLY</button>
        </NavLink>
        <a href="mailto:tleeviolin@gmail.com">
          <p>tleeviolin@gmail.com</p>
        </a>
        <a href="tel:+1-831-295-0911">
          <p id="new-students-contact-number">831.295.0911</p>
        </a>
        <p>
          Interested? <NavLink to="/contact">Contact</NavLink> me!
        </p>
      </div>
    </section>
  );
}
