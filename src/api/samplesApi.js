async function fetchSamples() {
  const response = await fetch("http://localhost:3333/samples");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
}

async function addSamples() {
  const response = await fetch("http://localhost:3333/samples", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: "", artist: "" }),
  });
  if (!response.ok) {
    throw response;
  }
  const result = await response.json();
  return result;
}
export { fetchSamples, addSamples };
