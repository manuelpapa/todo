export async function fetchSamples() {
  const response = await fetch("http://localhost:3333/samples");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
}

export function addSamples(newTitle) {
  fetch("http://localhost:3333/samples", {
    method: "POST",
    body: JSON.stringify({ title: "new shit" }),
    headers: { "Content-Type": "application/json" },
  });
}
