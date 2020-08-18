import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchSamples, addSamples } from "./api/samplesApi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [samples, setSamples] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function doFetch() {
      const samples = await fetchSamples();
      setSamples(samples);
    }
    doFetch();
  }, []);

  return (
    <>
      <header>
        Add Samples{" "}
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter title"
        />
      </header>

      <Router>
        <div classname="app">
          {samples?.map((sample) => (
            <div key={sample.id}>
              {sample.title} by {sample.artist} in {sample.genre}
            </div>
          ))}

          <Switch>
            <header className="App-header">
              <p>Sample List</p>
            </header>
            <Route path="/samples/:title">
              <h2>Titles</h2>
            </Route>
            <Route path="/samples/:artist">
              <h2>Artists</h2>
            </Route>
          </Switch>

          <Link to="/titles">Titles</Link>
          <Link to="/artists">Artists</Link>
        </div>
      </Router>
    </>
  );
}

export default App;
