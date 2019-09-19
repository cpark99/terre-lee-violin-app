import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Main from './Main';
import './App.css';

function App() {
  return (
    <main className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </main>
  );
}

export default App;
