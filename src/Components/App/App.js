import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import './App.css';
import Footer from '../Footer/Footer';
import PrivateEvents from '../PrivateEvents/PrivateEvents';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Lessons from '../Lessons/Lessons';
import NewStudents from '../NewStudents/NewStudents';
import SuzukiMethod from '../SuzukiMethod/SuzukiMethod';
import Contact from '../Contact/Contact';
import Application from '../Application/Application';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';

function App() {
  return (
    <main className="App">
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/private-events" component={PrivateEvents} />
        <Route exact path="/what-we-do" component={WhatWeDo} />
        <Route exact path="/lessons" component={Lessons} />
        <Route exact path="/new-students" component={NewStudents} />
        <Route exact path="/suzuki" component={SuzukiMethod} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/apply" component={Application} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
