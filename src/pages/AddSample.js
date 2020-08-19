import "./AddSample.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postSamples } from "../api/fetchSamples";
// import { postSamples } from "../api/fetchSamples";

// export default function AddSample() {
//   function AddSample() {
//     postSamples("Title", "Artist", "Track");
//   }

export default function AddSample() {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [timecode, setTimecode] = useState("");
  const [setCreationtime] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleArtistChange(event) {
    setArtist(event.target.value);
  }
  function handleGenreChange(event) {
    setGenre(event.target.value);
  }
  function handleTimecodeChange(event) {
    setTimecode(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const today = new Date();
    const date = `${today.getFullYear()} - ${
      today.getMonth() + 1
    } - ${today.getDate()} `;
    const time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + time;

    await postSamples({
      title,
      artist,
      genre,
      timecode,
      createdAt: dateTime,
    });
    setTitle("");
    setArtist("");
    setGenre("");
    setTimecode("");
  }

  return (
    <>
      <div className="AddSample">
        <div className="AddSample-header">
          <h2>Papas Samplebox</h2>
        </div>

        <div className="AddSample-main">
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                className="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleTitleChange}
              />
            </label>
            <label>
              Artist:
              <input
                className="artist"
                type="text"
                placeholder="Artist"
                value={artist}
                onChange={handleArtistChange}
              />
            </label>
            <label>
              Genre:
              <input
                className="genre"
                type="text"
                placeholder="Genre"
                value={genre}
                onChange={handleGenreChange}
              />
            </label>
            <label>
              Timecode:
              <input
                className="timecode"
                type="time"
                step="00.01"
                placeholder="Timecode"
                value={timecode}
                onChange={handleTimecodeChange}
              />
            </label>

            <input
              className="submit"
              type="submit"
              value="Add Sample"
              disabled={!title || !artist}
            />
          </form>
          <Link to="/">Samples</Link>
        </div>
      </div>
    </>
  );
}
