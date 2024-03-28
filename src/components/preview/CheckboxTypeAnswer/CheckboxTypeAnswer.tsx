import { memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setCheckboxAnswer } from "../../../store/surveySlice";
import RequiredMessage from "../RequiredMessage/RequiredMessage";
import { Wrapper, CheckboxWrapper, StyledCheckbox, StyledFieldset, StyledLabel } from "./CheckboxTypeAnswerStyle";

interface CheckboxTypeAnswerProps {
  questionIndex: number;
}

function CheckboxTypeAnswer({ questionIndex }: CheckboxTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const { options, required, checkboxAnswer } = useAppSelector((state) => state.survey.questions[questionIndex]);

  const handleClick = (optionIndex: number) => {
    dispatch(
      setCheckboxAnswer({
        questionIndex,
        optionIndex,
      })
    );
  };

  return (
    <Wrapper>
      <StyledFieldset>
        {options.map((option, optionIndex) => {
          const id = `checkbox-${questionIndex}-${optionIndex}`;
          return (
            <CheckboxWrapper key={optionIndex}>
              <StyledCheckbox
                id={id}
                type={"checkbox"}
                checked={checkboxAnswer![optionIndex]}
                value={option}
                onChange={() => handleClick(optionIndex)}
              />
              <StyledLabel htmlFor={id}>{option}</StyledLabel>
            </CheckboxWrapper>
          );
        })}
      </StyledFieldset>
      {required && <RequiredMessage isAnswered={checkboxAnswer!.includes(true)} />}
    </Wrapper>
  );
}

export default memo(CheckboxTypeAnswer);
