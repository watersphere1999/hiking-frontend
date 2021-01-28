import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Register0 from './pages/Register0';
import Home from './pages/Home.js'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register0 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
