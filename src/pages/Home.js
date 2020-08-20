import React from "react";
import { Link } from "react-router-dom";
import { fetchSamples } from "../api/fetchSamples";
import useAsync from "../hooks/useAsync";
import SampleListItem from "../components/SampleListItem";
import Container from "../components/Container";
import styled from "@emotion/styled";
import Button from "../components/Button";

const FooterContainer = styled(Container)`
  display: flex;
  justify-content: center;

  color: white;
`;

const AddButton = styled(Button)`
  border-radius: 200px;
  font-weight: 100;
  font-size: 3rem;
  padding: 8px 20px;
`;

export default function Home() {
  const { data: samples, loading, error } = useAsync(fetchSamples);

  return (
    <Container>
      {loading && <div>Loading...</div>}

      <h2>Papas Samplebox</h2>

      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {samples?.map((sample) => (
        <SampleListItem key={sample.id}>
          {sample.title} <i>by</i> {sample.artist} <i>in</i> {sample.genre}{" "}
          <i>at</i> {sample.timecode} | created {sample.createdAt}
        </SampleListItem>
      ))}

      <FooterContainer>
        <Link to="/add">
          <AddButton>+</AddButton>
        </Link>
      </FooterContainer>
    </Container>
  );
}
