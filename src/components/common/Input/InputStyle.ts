import styled from "styled-components";

interface StyledInputProps {
  fontSize?: number;
  bgColor?: string;
}

export const StyledInput = styled.input<StyledInputProps>`
  outline: none;
  border: none;
  padding: 5px;
  margin: 5px;
  border-bottom: 1px solid black;
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.bgColor};
`;
