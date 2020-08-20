import React from "react";
import styled from "@emotion/styled";
import Button from "./Button";

const Container = styled.div`
  display: grid;
  grid-area: auto, 1fr, auto;
  padding: 20px 20px;
`;

const DeleteButton = styled(Button)`
  background: #770e31;
  color: #c6244f;
`;

function SampleListItem({ children }) {
  return (
    <Container>
      {children}
      <Button>Edit</Button>
      <DeleteButton>Delete</DeleteButton>
    </Container>
  );
}

export default SampleListItem;
