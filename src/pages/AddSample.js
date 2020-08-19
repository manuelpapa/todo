import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { postSamples } from "../api/fetchSamples";

// export default function AddSample() {
//   function AddSample() {
//     postSamples("Title", "Artist", "Track");
//   }

export default function AddSample() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleArtistChange(event) {
    setArtist(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Artist:
          <input type="text" value={artist} onChange={handleArtistChange} />
        </label>
        <input type="submit" value="Add Sample" />
      </form>
      <Link to="/">Samples</Link>
    </>

    // <div className="AddSample">
    //   <div className="AppSample-header">
    //     <div>
    //       <Link to="/">Samples</Link> Add sample
    //     </div>
    //     <h2>Papas Samplebox</h2>
    //   </div>

    //   <div className="AppSample-main">
    //     <form>
    //       <input placeholder="Title" />
    //       <input placeholder="Artist" />
    //       <input placeholder="Genre" />
    //       <input placeholder="Timecode" />
    //       <button onClick={AddSample}>Add</button>
    //     </form>
    //   </div>
    // </div>
  );
}
