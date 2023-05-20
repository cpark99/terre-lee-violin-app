import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import UserContext from '../../../context';
// import AuthApiService from '../../../services/auth-api-service';
// import TokenService from '../../../services/token-service';
import springOne from '../../../img/EB2019-SpringRecital-8443.jpg';
import springTwo from '../../../img/violinpiano.jpg';
import ScrollToTopOnMount from '../ScrollToTopOnMount/ScrollToTopOnMount';
import homeMainOne from '../../../img/terre-violin-5-19.jpg';
import instagramGrey from '../../../img/instagram-grey.png';
import './Main.css';

export default function Main(props) {
  const [error] = useState(null);

  useEffect(() => {
    document.title = 'Terre Lee Violin';
  });

  // const context = useContext(UserContext);

  // function handleLoginSuccess(payload) {
  //   const { history } = props;
  //   const destination = (props.history.location.state || {}).from || '/profile';
  //   context.setUserId(payload.user_id);
  //   history.push(destination);
  // }

  // function handleDemoLogin(ev) {
  //   ev.preventDefault();
  //   setError(null);
  //   let email = 'violin@demo.com';
  //   let password = 'password';

  //   AuthApiService.postLogin({
  //     email: email,
  //     password: password
  //   })
  //     .then(res => {
  //       email = '';
  //       password = '';
  //       TokenService.saveAuthToken(res.authToken);
  //       handleLoginSuccess(res.payload);
  //     })
  //     .catch(res => {
  //       setError(res.error);
  //     });
  // }

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
          A professional free lance violinist, Terre also plays for symphonies,{' '}
          <NavLink to="/private-events">private events</NavLink>, recordings, and more.
        </p>
        <p id="apply-information-text">
          As a violin student, you have access to both private and group{' '}
          <NavLink to="/lessons">lessons</NavLink>, and online access to view and reschedule
          lessons, as well as any balance due.
        </p>
				<a
					href="https://www.instagram.com/terreleeviolin/"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					aria-label="open Instagram page"
				>
					<img
						loading="lazy"
						className="social-icon"
						src={instagramGrey}
						alt="Instagram icon"
					/>@terre_leee
				</a>
				<img className='homepage-image centered' src={homeMainOne} alt="Terre playing violin on a beach" />
        <NavLink to="/apply">
          <button id="introduction-apply-button">Apply Now</button>
        </NavLink>
        <p id="apply-information-sub-text" className="centered-text">
          {/* Check out the{' '}
          <button onClick={handleDemoLogin} className="demo-login-button">
            DEMO
          </button> !*/}
          Currently accepting <NavLink to="/new-students">new student</NavLink> applications!
        </p>
        <div role="alert">{error && <p className="red-font">{error}</p>}</div>
        <div className="flex-responsive-landscape-main">
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
