import React, { useState, useEffect } from "react";
import fetchSamples from "../api/fetchSamples";
import { Link } from "react-router-dom";

export default function Home() {
  const [samples, setSamples] = useState(null);
  async function doFetch() {
    const fetchData = await fetchSamples();
    setSamples(fetchData);
  }

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <div className="Home">
      <div className="Home-header">
        <div>
          <Link to="/add">Add Sample</Link>
        </div>
        <h2>Papas Samplebox</h2>
      </div>
      {samples?.map((sample) => (
        <div key={sample.id}>
          {sample.title} <i>by</i> {sample.artist} <i>in</i> {sample.genre}
        </div>
      ))}
    </div>
  );
}
