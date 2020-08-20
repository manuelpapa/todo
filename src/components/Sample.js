import React, { useState } from "react";
import styled from "@emotion/styled";

export default function Sample({ sample }) {
  const [complete, setComplete] = useState(sample.complete);

  function completeSample() {
    setComplete(true);
  }

  function resetSample() {
    setComplete(false);
  }

  return (
    <Container complete={complete}>
      <h2>{sample.title}</h2>
      <Button onClick={completeSample}>Complete</Button>
      <ResetButton onClick={resetSample}>Reset</ResetButton>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => (props.complete ? "#06d6a0" : "#ef476f")};
  padding: 10px;
  border-radius: 15px;
  margin: 5px;
`;

const Button = styled.button`
  margin: 3px;
  font-size: 1rem;
  background-color: #06d6a0;
  border-radius: 5px;
  border: solid 2px #010203;
`;

const ResetButton = styled(Button)`
  background-color: #ef476f;
`;
