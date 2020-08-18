import React, { useState, useEffect } from "react";
import fetchSamples from "../api/samplesApi";
import List from "../components/List";
import ListItem from "../components/ListItem";
import ListItemText from "../components/ListItemText";

export default function Samples() {
  const [samples, setSamples] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData() {
      const allSamples = await fetchSamples();
      setSamples(allSamples);
    }
    fetchData();
  }, []);

  if (isLoading || samples === null) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      <header>
        Samples{" "}
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter name"
        />
      </header>
      <main>
        <List>
          {samples.map((sample) => (
            <ListItem key={sample.id}>
              <ListItemText
                primary={sample.track}
                secondary={sample.artist}
                third={sample.genre}
              />
            </ListItem>
          ))}
        </List>
      </main>
    </>
  );
}
