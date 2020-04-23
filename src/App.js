import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timer from "./components/timer";
import StopWatch from "./components/stopWatch";
import './App.css';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/stopwatch">
            <StopWatch/>
          </Route>
          <Route path="/">
            <Timer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
