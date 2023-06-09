import styled from "styled-components";

interface ToggleProps {
  checked: boolean;
}

export const ToggleSwitch = styled.label<ToggleProps>`
  width: 30px;
  height: 10px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: ${(props) => (props.checked ? "lavender" : "lightgrey")};
  cursor: pointer;
  margin: 30px;
  transition: all 0.2s ease-in;
`;

export const ToggleButton = styled.span<ToggleProps>`
  top: 50%;
  left: ${(props) => (props.checked ? "15px" : "-5px")};
  background: ${(props) => (props.checked ? "#673ab7;" : "grey;")};
  width: 20px;
  height: 20px;
  position: absolute;
  transform: translateY(-50%);
  border-radius: 50%;
  transition: all 0.5s ease;
`;
