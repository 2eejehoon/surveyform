import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  padding: 0;
  border-bottom: 1px solid lightgrey;
  &:hover {
    border-bottom: 1px solid lightgrey;
  }
  &:focus {
    border-bottom: 2px solid #673ab7;
  }
`;
