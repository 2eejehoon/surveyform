import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  border: none;
  outline: none;
  resize: none;
  padding: 5px;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  line-height: 1;
  white-space: pre-wrap;
  overflow: hidden;
  &:hover {
    border-bottom: 1px solid lightgrey;
  }
  &:focus {
    border-bottom: 2px solid #673ab7;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StyledP = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  color: tomato;
`;
