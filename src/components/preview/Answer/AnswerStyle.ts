import styled from "styled-components";

export const Wrapper = styled.li`
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
export const AnswerHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px;
`;

export const AnswerBody = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`;

export const AnswerFooter = styled.div`
  padding: 5px;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
