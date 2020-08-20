import styled from "@emotion/styled";

const Button = styled.button`
  background: #c6244f;
  color: #770e31;
  padding: 10px;
  border-radius: 15px;
  border: none;
  color: ${(props) => (props.disabled ? "white" : "#770e31")};
`;

export default Button;
