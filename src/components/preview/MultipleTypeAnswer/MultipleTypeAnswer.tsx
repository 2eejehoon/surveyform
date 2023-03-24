import { ChangeEvent, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setOptionAnswer } from "../../../store/surveySlice";
import RequiredMessage from "../RequiredMessage/RequiredMessage";
import {
  RadioWrapper,
  StyledFieldset,
  StyledRadioInput,
  StyledLabel,
  Wrapper,
} from "./MultipleTypeAnswerStyle";

interface MultipleTypeAnswerProps {
  questionIndex: number;
}

function MultipleTypeAnswer({ questionIndex }: MultipleTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const { options, required, optionAnswer } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
  );

  const handleOptionClick = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setOptionAnswer({ questionIndex, clickedOption: e.target.value }));
  };

  return (
    <Wrapper>
      <StyledFieldset>
        {options!.map((option, index) => {
          const id = `option-${questionIndex}-${index}`;
          return (
            <RadioWrapper key={index}>
              <StyledRadioInput
                id={id}
                type={"radio"}
                value={option}
                checked={option === optionAnswer}
                onChange={handleOptionClick}
              />
              <StyledLabel htmlFor={id}>{option}</StyledLabel>
            </RadioWrapper>
          );
        })}
      </StyledFieldset>
      {required && <RequiredMessage isAnswered={optionAnswer !== ""} />}
    </Wrapper>
  );
}

export default memo(MultipleTypeAnswer);
