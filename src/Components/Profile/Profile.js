import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';

export default function Profile() {
  useEffect(() => {
    document.title = '(name) | Profile';
  });

  return (
    <section id="profile" className="container">
      <ScrollToTopOnMount />
      <h1>PROFILE</h1>
      <div id="profile-name-container" class="profile-info-container">
        <h4>Name:</h4>
        <p>Chris Park</p>
      </div>
      <div id="profile-lessons-container" class="profile-info-container">
        <h4>Next Lesson:</h4>
        <p id="profile-lesson-date">10/2/2019</p>
      </div>
      <div id="profile-amount-due-container" class="profile-info-container">
        <h4>Amount Due:</h4>
        <p id="profile-amount-due">$40</p>
      </div>
      <div id="reschedule-section" className="main-sub-section flex-column-center">
        <h2 class="profile-section-header">RESCHEDULE LESSON</h2>
        <a
          href="https://calendly.com/cpwebdeveloper99/reschedule?month=2019-09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button id="to-reschedule-button">Click to reschedule</button>
        </a>
      </div>
      <p className="question-text">
        <span className="italic">Questions or concerns?</span>{' '}
        <NavLink to="/contact">&nbsp;Contact me</NavLink>
      </p>
    </section>
  );
}
