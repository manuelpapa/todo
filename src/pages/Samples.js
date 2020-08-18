import React, { useState, useEffect } from "react";
import fetchSamples from "../api/samplesApi";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Samples() {
  const [samples, setSamples] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const allSamples = await fetchSamples();
      setSamples(allSamples);
    }
    fetchData();
  }, []);

  return (
    <>
      <header>
        Search Samples{" "}
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter name"
        />
      </header>

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

      <div classname="app">
        {samples?.map((sample) => (
          <div key={sample.id}>
            {sample.title} by {sample.artist}
          </div>
        ))}
      </div>
    </>
  );
}
