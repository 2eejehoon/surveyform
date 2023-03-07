import styled from "styled-components";

interface StyledButtonProps {
  width: number;
  height: number;
  fontSize: number;
  color: string;
  bgColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 2px;
  border-radius: 15px;
  font-size: ${(props) => `${props.fontSize}px`};
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  cursor: pointer;

  &.hover {
    opacity: 70%;
  }
`;
