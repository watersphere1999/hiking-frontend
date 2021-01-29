import "./App.css";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home.js";
import Register0 from "./pages/Register0";
import Register1 from "./pages/Register1";

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
          <Route path="/register1">
            <Register1 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
