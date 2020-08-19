import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddSample from "./pages/AddSample";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add">
          <AddSample />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
