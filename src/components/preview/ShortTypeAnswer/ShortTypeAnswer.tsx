import { ChangeEvent, FocusEvent, useState, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTextAnswer } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";
import { Wrapper, StyledP } from "./ShortTypeAnswerStyle";

interface ShortTypeAnswerProps {
  questionIndex: number;
}

function ShortTypeAnswer({ questionIndex }: ShortTypeAnswerProps) {
  const [message, setMessage] = useState("");
  const dispatch = useAppDispatch();
  const { textAnswer, required } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
  );

  const inputValue = typeof textAnswer === "string" ? textAnswer : "";

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setTextAnswer({ questionIndex, textAnswer: e.target.value }));

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    // 필수 질문이 아니면 return
    if (!required) return;

    // 필수 질문이면 값 체크
    if (textAnswer === "") setMessage("필수 질문입니다.");
    else setMessage("");
  };

  return (
    <Wrapper>
      <Input
        id="short-answer"
        type="text"
        value={inputValue}
        borderBottom={true}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <StyledP>{message}</StyledP>
    </Wrapper>
  );
}

export default memo(ShortTypeAnswer);
