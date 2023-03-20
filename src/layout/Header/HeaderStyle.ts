import styled from "styled-components";

export const StyledHeader = styled.header`
  &:focus-within {
    border-left: 5px solid #4285f4;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  margin-top: 20px;
  width: 100%;
  height: 160px;
  background-color: white;
  border: 1px solid lightgrey;
  border-top: 10px solid #673ab7;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-bottom: 10px;
  padding: 10px;
  background-color: white;
`;
