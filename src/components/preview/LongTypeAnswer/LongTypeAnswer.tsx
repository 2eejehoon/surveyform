import { ChangeEvent, FocusEvent, useState, useRef, useCallback, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTextAnswer } from "../../../store/surveySlice";
import { StyledTextarea, Wrapper, StyledP } from "./LongTypeAnswerStyle";

interface LongTypeAnswerProps {
  questionIndex: number;
}

function LongTypeAnswer({ questionIndex }: LongTypeAnswerProps) {
  const [message, setMessage] = useState("");
  const textarea = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useAppDispatch();
  const { textAnswer, required } = useAppSelector((state) => state.survey.questions[questionIndex]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setTextAnswer({ questionIndex, textAnswer: e.target.value }));
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    // 필수 질문이 아니면 return
    if (!required) return;

    // 필수 질문이면 값 체크
    if (textAnswer === "") setMessage("필수 질문입니다.");
    else setMessage("");
  };

  const handleResizeHeight = useCallback(() => {
    if (textarea.current instanceof HTMLTextAreaElement) {
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  }, []);

  return (
    <Wrapper>
      <StyledTextarea
        ref={textarea}
        value={textAnswer}
        onChange={handleChange}
        onBlur={handleBlur}
        onInput={handleResizeHeight}
        rows={1}
      />
      <StyledP>{message}</StyledP>
    </Wrapper>
  );
}

export default memo(LongTypeAnswer);
