import { ChangeEvent, useState, useEffect, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setOptionAnswer } from "../../../store/surveySlice";
import {
  RadioWrapper,
  StyledFieldset,
  StyledRadioInput,
  StyledLabel,
  StyledP,
  Wrapper,
} from "./MultipleTypeAnswerStyle";

interface MultipleTypeAnswerProps {
  questionIndex: number;
}

function MultipleTypeAnswer({ questionIndex }: MultipleTypeAnswerProps) {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const { options, required, optionAnswer } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
  );

  const handleOptionClick = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setOptionAnswer({ questionIndex, clickedOption: e.target.value }));
  };

  // 렌더링 시 required, optionAnswer 확인해서 message 표시
  // 양식 지우기 클릭 시 optionAnswer가 사라지면 message 표시
  useEffect(() => {
    // 필수 질문이 아니면 return
    if (!required) return;

    // 필수 질문이면 값 체크
    if (optionAnswer === "") setMessage("필수 질문입니다.");
    else setMessage("");
  }, [optionAnswer]);

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
      <StyledP>{message}</StyledP>
    </Wrapper>
  );
}

export default memo(MultipleTypeAnswer);
