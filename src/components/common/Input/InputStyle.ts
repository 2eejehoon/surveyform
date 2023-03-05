import styled from "styled-components";

interface StyledInputProps {
  width: number;
  height: number;
}

export const StyledInput = styled.input<StyledInputProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
