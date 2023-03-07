import styled from "styled-components";

export const StyledSelect = styled.select`
  position: relative;
  font-size: 14px;
  bottom: 5px;
  padding: 3px;
  width: 250px;
  height: 50px;
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 5px;

  &.option {
    font-size: 20px;
  }
`;
