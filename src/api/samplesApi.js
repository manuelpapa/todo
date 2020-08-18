export default async function fetchSamples() {
  const sampleFetch = await fetch("http://localhost:6000/samples");
  const response = await sampleFetch.json();
  return response;
}
