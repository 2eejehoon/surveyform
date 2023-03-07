import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    console.log(e.target.value);

  return (
    <StyledFieldset>
      {options.map((option, index) => {
        return (
          <RadioWrapper key={index}>
            <StyledRadioInput
              id={`option-${index}`}
              type="radio"
              value={option}
              checked={option === "옵션2"}
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
