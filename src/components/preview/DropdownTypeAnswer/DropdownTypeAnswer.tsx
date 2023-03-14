import { ChangeEvent, useState, useEffect, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setOptionAnswer } from "../../../store/surveySlice";
import { StyledP, StyledSelect, Wrapper } from "./DropdownTypeAnswerStyle";

interface DropdownTypeAnswerProps {
  questionIndex: number;
}

function DropdownTypeAnswer({ questionIndex }: DropdownTypeAnswerProps) {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const { options, optionAnswer, required } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
  );

  const seletedValue = optionAnswer || "default";

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
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
      <StyledSelect onChange={handleChange} value={seletedValue}>
        <option value="default" disabled defaultChecked>
          선택
        </option>
        {options!.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </StyledSelect>
      <StyledP>{message}</StyledP>
    </Wrapper>
  );
}

export default memo(DropdownTypeAnswer);
