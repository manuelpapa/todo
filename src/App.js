import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchSamples, addSamples } from "./api/samplesApi";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

function App() {
  const [samples, setSamples] = useState(null);
  const [addSamples, setAddSamples] = useState(false);

  // let history = useHistory();

  useEffect(() => {
    async function doFetch() {
      const samples = await fetchSamples();
      setSamples(samples);
    }
    doFetch();
  }, [addSamples]);

  // async function handleClick() {
  //   history.push("/add-sample")
  // }

  return (
    <div className="App">
      <header className="App-header">
        Add Samples{" "}
        <input
          value={addSamples}
          onChange={(event) => setAddSamples(event.target.value)}
          placeholder="Enter title"
        />
      </header>

      <Router>
        <div className="App-main">
          {samples?.map((sample) => (
            <div key={sample.id}>
              {sample.title} <i>by</i> {sample.artist} <i>in</i> {sample.genre}
            </div>
          ))}

          <Switch>
            <Route path="/samples/:title">
              <h2>Titles</h2>
            </Route>
            <Route path="/samples/:artist">
              <h2>Artists</h2>
            </Route>
          </Switch>
        </div>
        <div className="App-footer">
          <Link to="/titles">Titles</Link>
          <Link to="/artists">Artists</Link>
        </div>
      </Router>
    </div>
  );
}

export default App;
