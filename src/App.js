import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Index from './pages/index/index';
import Introduce from './pages/introduce/introduce';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Index}></Route>
        <Route path="/introduce" component={Introduce}></Route>
      </Switch>
    </Router>
  );
}

export default App;
