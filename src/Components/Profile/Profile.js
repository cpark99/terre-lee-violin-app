import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import UserContext, { nullUser } from '../../context';
import UserApiService from '../../services/user-api-service';
import './Profile.css';

export default class Profile extends Component {
  static defaultProps = {
    match: { params: {} }
  };

  static contextType = UserContext;

  componentDidMount() {
    this.context.clearError();
    console.log(this.context);
    UserApiService.getUser(this.context.user_id)
      .then(this.context.setUser)
      .catch(this.context.setError);
  }

  render() {
    const { error, user = nullUser } = this.context;
    let content;
    if (error) {
      content =
        error.error === `User doesn't exist` ? (
          <p className="red-font">User not found</p>
        ) : (
          <p className="red-font">There was an error</p>
        );
    }
    return (
      <section id="profile">
        <ScrollToTopOnMount />
        {content}
        <div id="profile-information" className="flex-column-center">
          <h1>PROFILE</h1>
          <div id="profile-name-container" className="profile-info-container">
            <h4>Name:</h4>
            <p>{user.name}</p>
          </div>
          <div id="profile-lessons-container" className="profile-info-container">
            <h4>Next Lesson:</h4>
            <p id="profile-lesson-date">{user.next_lesson}</p>
          </div>
          <div id="profile-amount-due-container" className="profile-info-container">
            <h4>Amount Due:</h4>
            <p id="profile-amount-due">${user.amount_due}</p>
          </div>
        </div>
        <div id="reschedule-section" className="main-sub-section flex-column-center">
          <div id="profile-reschedule" className="flex-column-center">
            <h2 className="profile-section-header">RESCHEDULE LESSON</h2>
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
        </div>
      </section>
    );
  }
}
