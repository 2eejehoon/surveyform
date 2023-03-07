import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setMultipleAnswer } from "../../../store/surveySlice";
import {
  RadioWrapper,
  StyledFieldset,
  StyledRadioInput,
  StyledLabel,
} from "./MultipleTypeAnswerStyle";

interface MultipleTypeAnswerProps {
  questionIndex: number;
}

function MultipleTypeAnswer({ questionIndex }: MultipleTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const options = useAppSelector(
    (state) => state.survey.questions[questionIndex].options
  );

  const multipleAnswer = useAppSelector(
    (state) => state.survey.questions[questionIndex].multipleAnswer
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setMultipleAnswer({ questionIndex, clickedOption: e.target.value })
    );

  return (
    <StyledFieldset>
      {options.map((option, index) => {
        return (
          <RadioWrapper key={index}>
            <StyledRadioInput
              id={`option-${index}`}
              type="radio"
              value={option}
              checked={option === multipleAnswer}
              onChange={handleChange}
            />
            <StyledLabel htmlFor={`option-${index}`}>{option}</StyledLabel>
          </RadioWrapper>
        );
      })}
    </StyledFieldset>
  );
}

export default MultipleTypeAnswer;
