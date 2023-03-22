import styled from "styled-components";

export const StyledLi = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 15px;
`;

export const DragButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 4px;
  left: -12px;
  position: absolute;
  width: 15px;
  height: 15px;
  color: lightgrey;
  font-size: 24px;

  &:focus-within,
  :hover {
    color: black;
  }
`;
