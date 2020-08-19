import React, { useState, useEffect } from "react";
import "./App.css";
import fetchSamples from "./api/fetchSamples";
import addSamples from "./api/postSamples";

function App() {
  const [samples, setSamples] = useState(null);
  async function doFetch() {
    const fetchData = await fetchSamples();
    setSamples(fetchData);
  }

  useEffect(() => {
    doFetch();
  }, []);

  function addSample() {
    addSamples("Hello", "Artist", "Track").then(doFetch);
  }

  return (
    <div className="App">
      <div className="App-header">
        <h2>Papas Samplebox</h2>
      </div>

      <div className="App-main">
        {samples?.map((sample) => (
          <div key={sample.id}>
            {sample.title} <i>by</i> {sample.artist} <i>in</i> {sample.genre}
          </div>
        ))}
        <form>
          <input placeholder="Title" />
          <input placeholder="Artist" />
          <input placeholder="Genre" />
          <input placeholder="Timecode" />
          <button onClick={addSample}>Add</button>
        </form>
      </div>
    </div>
  );
}

export default App;
