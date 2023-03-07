import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setCheckboxAnswer } from "../../../store/surveySlice";
import {
  CheckboxWrapper,
  StyledCheckbox,
  StyledFieldset,
  StyledLabel,
} from "./CheckboxTypeAnswerStyle";

interface CheckboxTypeAnswerProps {
  questionIndex: number;
}

function CheckboxTypeAnswer({ questionIndex }: CheckboxTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const options = useAppSelector(
    (state) => state.survey.questions[questionIndex].options
  );

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setCheckboxAnswer({
        questionIndex,
        checked: e.target.checked,
        clickedOption: e.target.value,
      })
    );
  };

  return (
    <StyledFieldset>
      {options.map((option, optionIndex) => {
        const id = `checkbox-${optionIndex}`;
        return (
          <CheckboxWrapper key={optionIndex}>
            <StyledCheckbox
              id={id}
              type="checkbox"
              value={option}
              onChange={handleClick}
            />
            <StyledLabel htmlFor={id}>{option}</StyledLabel>
          </CheckboxWrapper>
        );
      })}
    </StyledFieldset>
  );
}

export default CheckboxTypeAnswer;
