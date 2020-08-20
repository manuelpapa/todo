import React from "react";
import { Link } from "react-router-dom";
import { fetchSamples } from "../api/fetchSamples";
import useAsync from "../hooks/useAsync";
import SampleListItem from "../components/SampleListItem";
import Container from "../components/Container";
import styled from "@emotion/styled";

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  background-image: var(--bg-gradient);
  color: #770e31;
`;

export default function Home() {
  const { data: samples, loading, error } = useAsync(fetchSamples);

  return (
    <Container>
      <HeaderContainer>
        <div>
          <Link to="/add">Add Sample</Link>
          {loading && <div>Loading...</div>}
        </div>
        <h2>Papas Samplebox</h2>
      </HeaderContainer>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {samples?.map((sample) => (
        <SampleListItem key={sample.id}>
          {sample.title} <i>by</i> {sample.artist} <i>in</i> {sample.genre}{" "}
          <i>at</i> {sample.timecode} | created {sample.createdAt}
        </SampleListItem>
      ))}
    </Container>
  );
}
