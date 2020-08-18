import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Samples from "./pages/Samples";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <header className="App-header">
            <p>Sample List</p>
          </header>
          <Route path="/samples:track">
            <Samples />
          </Route>
        </Switch>

        <Link to="/samples:track">Tracksearch</Link>
      </div>
    </Router>
  );
}

export default App;
