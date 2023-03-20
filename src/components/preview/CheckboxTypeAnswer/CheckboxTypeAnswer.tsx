import { ChangeEvent, useState, useEffect, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setCheckboxAnswer } from "../../../store/surveySlice";
import {
  Wrapper,
  CheckboxWrapper,
  StyledCheckbox,
  StyledFieldset,
  StyledLabel,
  StyledP,
} from "./CheckboxTypeAnswerStyle";

interface CheckboxTypeAnswerProps {
  questionIndex: number;
}

function CheckboxTypeAnswer({ questionIndex }: CheckboxTypeAnswerProps) {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const { options, required, checkboxAnswer } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
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

  // 렌더링 시 required, optionAnswer 확인해서 message 표시
  // 양식 지우기 클릭 시 optionAnswer가 사라지면 message 표시
  useEffect(() => {
    // 필수 질문이 아니면 return
    if (!required) return;

    // 필수 질문이면 값 체크
    if (checkboxAnswer === undefined || checkboxAnswer.length === 0) setMessage("필수 질문입니다.");
    else setMessage("");
  }, [checkboxAnswer]);

  return (
    <Wrapper>
      <StyledFieldset>
        {options!.map((option, optionIndex) => {
          const id = `checkbox-${optionIndex}`;
          return (
            <CheckboxWrapper key={optionIndex}>
              <StyledCheckbox id={id} type="checkbox" value={option} onChange={handleClick} />
              <StyledLabel htmlFor={id}>{option}</StyledLabel>
            </CheckboxWrapper>
          );
        })}
      </StyledFieldset>
      <StyledP>{message}</StyledP>
    </Wrapper>
  );
}

export default memo(CheckboxTypeAnswer);
