import styled from "styled-components";

interface StyledInputProps {
  fontSize?: number;
  bgColor?: string;
}

export const StyledInput = styled.input<StyledInputProps>`
  outline: none;
  border: none;
  width: 100%;
  padding: 5px;
  font-size: ${(props) => `${props.fontSize}px`};
  background-color: ${(props) => props.bgColor};

  &:hover {
    border-bottom: 1px solid lightgrey;
  }
  &:focus {
    border-bottom: 2px solid #673ab7;
  }
`;
