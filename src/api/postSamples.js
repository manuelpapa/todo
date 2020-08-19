export default function addSamples(newTitle) {
  fetch("http://localhost:3333/samples", {
    method: "POST",
    body: JSON.stringify({
      genre: "",
      artist: "me",
      title: "shit",
      timecode: "0:01",
    }),
    headers: { "Content-Type": "application/json" },
  });
}
