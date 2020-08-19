export async function fetchSamples() {
  const response = await fetch("http://localhost:3333/samples");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
}

// export function postSamples({ newGenre, newArtist, newTitle, newTimecode }) {
//   fetch("http://localhost:3333/samples", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       genre: newGenre,
//       artist: newArtist,
//       title: newTitle,
//       timecode: newTimecode,
//     }),

//   });
// }

export const postSamples = async (sample) => {
  const response = await fetch("http://localhost:3333/samples", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sample),
  });
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
};
