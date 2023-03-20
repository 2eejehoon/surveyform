import styled from "styled-components";

export const ModalWrapper = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: auto;
  width: 500px;
  max-height: 700px;
  position: fixed;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;
  padding: 15px;
`;

export const StyledList = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;
