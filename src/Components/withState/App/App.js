import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { setDefaultBreakpoints } from 'react-socks';
import Nav from '../Nav/Nav';
import Main from '../../withoutState/Main/Main';
import Footer from '../../withoutState/Footer/Footer';
import PrivateEvents from '../../withoutState/PrivateEvents/PrivateEvents';
import WhatWeDo from '../../withoutState/WhatWeDo/WhatWeDo';
import Lessons from '../../withoutState/Lessons/Lessons';
import NewStudents from '../../withoutState/NewStudents/NewStudents';
import SuzukiMethod from '../../withoutState/SuzukiMethod/SuzukiMethod';
import Contact from '../../withoutState/Contact/Contact';
import Application from '../Application/Application';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import UserContext from '../../../context';
import Sidebar from '../Sidebar/Sidebar';
import TokenService from '../../../services/token-service';
import AuthApiService from '../../../services/auth-api-service';
import UserApiService from '../../../services/user-api-service';
import PublicOnlyRoute from '../../withoutState/Utils/PublicOnlyRoute';
import PrivateRoute from '../../withoutState/Utils/PrivateRoute';
import NotFound from '../../withoutState/NotFound/NotFound';
import ApplicationSuccess from '../../withoutState/ApplicationSuccess/ApplicationSuccess';
import './App.css';

class App extends React.Component {
  state = {
    showNavMenu: false,
    user: UserContext.nullUser,
    user_id: '',
    error: null,
    hasError: false
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick, false);
    document.addEventListener('touchstart', this.handleOutsideClick, false);

    if (TokenService.hasAuthToken()) {
      AuthApiService.getUserId().then(res => {
        UserApiService.getUser(res.id)
          .then(this.setUser)
          .then(this.getUserId)
          .catch(this.setError);
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleOutsideClick, false);
    document.removeEventListener('touchstart', this.handleOutsideClick, false);
  }

  handleOutsideClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    // outside
    this.closeNavMenu();
  };

  toggleSidebarNav = () => {
    if (this.state.showNavMenu === false) {
      this.setState({ showNavMenu: true });
    }
    if (this.state.showNavMenu === true) {
      this.setState({ showNavMenu: false });
    }
  };

  closeNavMenu = () => {
    this.setState({
      showNavMenu: false
    });
  };

  getUserId = user => {
    this.setState({ user_id: this.state.user.id });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setUser = user => {
    this.setState({ user });
  };

  clearUser = () => {
    this.setUser(UserContext.nullUser);
  };

  setUserId = user_id => {
    this.setState({ user_id: user_id });
  };

  render() {
    const value = {
      user: this.state.user,
      user_id: this.state.user_id,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setUser: this.setUser,
      clearUser: this.clearUser,
      setUserId: this.setUserId,
      toggleSidebarNav: this.toggleSidebarNav
    };
    setDefaultBreakpoints([
      { xsmall: 0 }, // all mobile devices
      { mobileLandscape: 415 }, // up to iphone6+
      { small: 576 }, // mobile devices (not sure which one's this big)
      { smallMed: 667 }, // iphone 6 landscape
      { medium: 768 }, // ipad, ipad pro, ipad mini, etc
      { medLarge: 812 }, // iphone X
      { large: 992 }, // smaller laptops
      { tabletLandscape: 1000 },
      { xlarge: 1200 } // laptops and desktops
    ]);
    return (
      <main className="App">
        <div
          id="main-body"
          className={this.state.showNavMenu ? 'partial-main-body' : 'whole-main-body'}
        >
          <UserContext.Provider value={value}>
            <Route
              path="/"
              render={props => <Nav {...props} showNavMenu={this.state.showNavMenu} />}
            />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/private-events" component={PrivateEvents} />
              <Route exact path="/what-we-do" component={WhatWeDo} />
              <Route exact path="/lessons" component={Lessons} />
              <Route exact path="/new-students" component={NewStudents} />
              <Route exact path="/suzuki" component={SuzukiMethod} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/apply" component={Application} />
              <PublicOnlyRoute exact path="/login" component={Login} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <Route exact path="/success" component={ApplicationSuccess} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </UserContext.Provider>
        </div>
        <div
          id="sidebar-nav"
          className={this.state.showNavMenu ? 'visible-side-nav' : 'hidden-side-nav'}
          ref={node => (this.node = node)}
        >
          <Sidebar closeNavMenu={this.closeNavMenu} />
        </div>
      </main>
    );
  }
}

export default App;
