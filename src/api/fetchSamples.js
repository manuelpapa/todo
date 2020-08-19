export default async function fetchSamples() {
  const response = await fetch("http://localhost:3333/samples");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
}
