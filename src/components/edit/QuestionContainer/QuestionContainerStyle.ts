import styled from "styled-components";

export const StyledLi = styled.li`
  position: relative;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
  &:focus-within {
    border-left: 5px solid #4285f4;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const DragButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  width: 30px;
  height: 30px;
  color: lightgrey;
  font-size: 24px;
  -ms-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  cursor: pointer;

  &:focus-within,
  :hover {
    color: black;
  }
`;
