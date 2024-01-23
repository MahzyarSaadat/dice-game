import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  text-transform: capitalize;
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid black;

  &:hover {
    background-color: #000;
    color: #fff;
    border: 1px solid #000;
  }
`;
