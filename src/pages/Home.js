import React from "react";
import { Link } from "react-router-dom";
import { fetchSamples } from "../api/fetchSamples";
import useAsync from "../hooks/useAsync";

export default function Home() {
  const { data: samples, loading, error } = useAsync(fetchSamples);

  return (
    <div className="Home">
      <div className="Home-header">
        <div>
          <Link to="/add">Add Sample</Link>
          {loading && <div>Loading...</div>}
        </div>
        <h2>Papas Samplebox</h2>
      </div>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {samples?.map((sample) => (
        <div key={sample.id}>
          {sample.title} <i>by</i> {sample.artist} <i>in</i> {sample.genre}{" "}
          <i>at</i> {sample.timecode} | created {sample.createdAt}
        </div>
      ))}
    </div>
  );
}
