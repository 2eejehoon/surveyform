import styled from "styled-components";

interface ToggleProps {
  checked: boolean;
}

export const ToggleSwitch = styled.label<ToggleProps>`
  width: 45px;
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
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.checked ? "0px" : "25px")};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${(props) => (props.checked ? "#673ab7;" : "grey;")};
  transition: all 0.5s ease;
`;
