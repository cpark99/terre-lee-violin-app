import React, { Component } from 'react';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import studentOne from '../../img/IMG_E2975.jpg';
import studentTwo from '../../img/EB2019-SpringRecital-8775.jpg';
import studentThree from '../../img/EB2019-SpringRecital-8716.jpg';
import './WhatWeDo.css';

export default class PrivateEvents extends Component {
  render() {
    return (
      <section id="what-we-do" className="container">
        <ScrollToTopOnMount />
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
        <span className="blockquote-quote">"</span>
        <blockquote>“Beautiful tone, beautiful heart.” - Dr. Suzuki</blockquote>
        <img className="main-image" src={studentOne} alt="student learing to play violin" />
        <img className="main-image" src={studentTwo} alt="student playing violin" />
        <img
          className="main-image"
          src={studentThree}
          alt="Terre Lee teaching student how to play a violin"
        />
      </section>
    );
  }
}
