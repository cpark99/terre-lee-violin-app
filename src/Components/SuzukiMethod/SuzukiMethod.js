import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import StudioDropdown from '../StudioDropdown/StudioDropdown';
import { Breakpoint } from 'react-socks';
import StudioDropdownList from '../StudioDropdownList/StudioDropdownList';
import './SuzukiMethod.css';

export default function SuzukiMethod(props) {
  useEffect(() => {
    document.title = 'Suzuki Method | Terre Lee';
  });

  return (
    <section id="suzuki-method" className="container flex-responsive-landscape">
      <ScrollToTopOnMount />
      <Breakpoint small down>
        <StudioDropdown location={props.location} />
      </Breakpoint>
      <Breakpoint smallMed up>
        <div id="suzuki-menu-desktop" className="page-menu-desktop">
          <h2>Teaching Studio</h2>
          <StudioDropdownList location={props.location} />
        </div>
      </Breakpoint>
      <div id="new-students-information" className="responsive-column-landscape">
        <div
          id="suzuki-image"
          className="main-image"
          alt="Dr. Shinichi Suzuki playing violing with students in background"
        ></div>
        <p className="image-info">Dr. Shinichi Suzuki</p>
        <h1 className="page-title">THE SUZUKI METHOD</h1>
        <p>
          The <span className="bold">Suzuki Method</span>, also known as the "mother tongue" method
          is a foundational approach that highlights parental involvement, listening, and practice.
          Dr. Shinichi Suzuki developed his ingenious method after noticing children easily learn
          their mother tongue language. This same method to learn language is adapted to learn
          music, so that every child can learn to play an instrument with the same fluidity, ease
          and confidence as when speaking their native language.
        </p>
        <p>For an in depth look at the Suzuki method, please visit:</p>
        <a href="https://suzukiassociation.org/" target="_blank" rel="noopener noreferrer">
          <p>https://suzukiassociation.org/</p>
        </a>
        <a
          href="https://suzukiassociation.org/people/terre-lee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>https://suzukiassociation.org/people/terre-lee/</p>
        </a>
        <h1 className="page-title sub-title">THE SUZUKI TRIANGLE</h1>
        <p>
          The teacher-parent/caretaker-student relationship is called the Suzuki triangle. We all
          work together during the lessons, learning from each other with mutual respect. At home,
          the parent/care taker is the "home teacher," and works with assignments given by the
          teacher every day.
        </p>
        <h1 className="page-title sub-title">GROUP CLASS</h1>
        <p>
          Group classes are an essential ingredient for Suzuki learning. Read more under{' '}
          <NavLink to="/lessons">Lessons</NavLink>.
        </p>
        <span className="blockquote-quote">"</span>
        <blockquote>“Beautiful tone, beautiful heart.” - Dr. Shinichi Suzuki</blockquote>
      </div>
    </section>
  );
}
