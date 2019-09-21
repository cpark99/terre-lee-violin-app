import React, { useEffect } from 'react';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import lessonTwo from '../../img/EB2019-SpringRecital-8700.jpg';
import StudioDropdown from '../StudioDropdown/StudioDropdown';
import './Lessons.css';

export default function Lessons(props) {
  useEffect(() => {
    document.title = 'Lessons | Terre Lee';
  });

  return (
    <section id="lessons" className="container">
      <ScrollToTopOnMount />
      <StudioDropdown location={props.location} />
      <h1 className="page-title">PRIVATE LESSONS</h1>
      <div
        id="lesson-one-image"
        className="main-image"
        alt="student learning how to hold the violin bow"
      ></div>
      <p>
        Private lessons are weekly throughout the session. In weekly lessons, we learn violin
        technique, beautiful tone production, rhythm, sight reading, prepared reading, and
        building/maintaining a repertoire.
      </p>
      <p>
        Depending on the child's age and ability, lessons start at 30 minutes, then build to 1 hour.
      </p>
      <p>
        It is required there is a consistent parent or adult who is part of the child’s lessons and
        practice at home. This parent or adult is expected to take notes with guidance of the
        teacher so they can help shape a home practice for their child.
      </p>
      <h2 className="page-sub-title">GROUP CLASS</h2>
      <img className="main-image" src={lessonTwo} alt="violin students on stage at a recital" />
      <p>
        An essential part of effective learning, group classes are in addition to private violin
        lessons. Group classes provide a wonderful opportunity to motivate students. In these
        classes, students will review music vocabulary, refine techniques, work and play together as
        an ensemble, develop leadership skills, and have a good time!
      </p>
      <p>
        Group class gives students a peer group during their musical journey with other musical
        friends to play and improve with.
      </p>
      <p>
        Group class is a requirement to take lessons at Terre's studio. Class is every other
        Wednesdays at 4:30.
      </p>
    </section>
  );
}
