import styled from "styled-components";

export const Button = styled.button`
  color: #ffffff;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cusor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background: #ffffff;
    border: 1px solid #000000;
    color: #000000;
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000;
  &:hover {
    background: #000000;
    border: 1px solid transparent;
    color: #ffffff;
  }
`;
