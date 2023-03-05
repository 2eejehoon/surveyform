import styled from "styled-components";

interface StyledButtonProps {
  width: number;
  height: number;
  color: string;
  bgColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;
