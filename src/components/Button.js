import styled from "@emotion/styled";

const Button = styled.button`
  background: #4bc4db;
  padding: 10px;
  border-radius: 15px;
  border: none;
  color: ${(props) => (props.disabled ? "white" : "#D1F5F8")};
`;

export default Button;
