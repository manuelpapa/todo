import React from "react";
import { Link } from "react-router-dom";
import postSamples from "../api/postSamples";

export default function AddSample() {
  function AddSample() {
    postSamples("Title", "Artist", "Track");
  }

  return (
    <div className="AddSample">
      <div className="AppSample-header">
        <div>
          <Link to="/">Samples</Link> Add sample
        </div>
        <h2>Papas Samplebox</h2>
      </div>

      <div className="AppSample-main">
        <form>
          <input placeholder="Title" />
          <input placeholder="Artist" />
          <input placeholder="Genre" />
          <input placeholder="Timecode" />
          <button onClick={AddSample}>Add</button>
        </form>
      </div>
    </div>
  );
}
