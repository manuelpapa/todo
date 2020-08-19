export default function postSamples({
  newGenre,
  newArtist,
  newTitle,
  newTimecode,
}) {
  fetch("http://localhost:3333/samples", {
    method: "POST",
    body: JSON.stringify({
      genre: newGenre,
      artist: newArtist,
      title: newTitle,
      timecode: newTimecode,
    }),
    headers: { "Content-Type": "application/json" },
  });
}
