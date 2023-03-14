import styled from "styled-components";

interface StyledInputProps {
  borderBottom?: boolean;
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
  border-bottom: ${(props) => (props.borderBottom ? "1px solid lightgrey" : "none")};

  &:hover {
    border-bottom: 1px solid lightgrey;
  }
  &:focus {
    border-bottom: 2px solid #673ab7;
  }
`;
