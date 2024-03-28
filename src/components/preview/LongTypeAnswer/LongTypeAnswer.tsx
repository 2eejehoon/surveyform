import { ChangeEvent, useRef, useCallback, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTextAnswer } from "../../../store/surveySlice";
import RequiredMessage from "../RequiredMessage/RequiredMessage";
import { StyledTextarea, Wrapper } from "./LongTypeAnswerStyle";
import { LongQuestion, isLongQuestion } from "../../../type";

interface LongTypeAnswerProps {
  questionIndex: number;
}

function LongTypeAnswer({ questionIndex }: LongTypeAnswerProps) {
  const textarea = useRef<HTMLTextAreaElement | null>(null);
  const dispatch = useAppDispatch();
  const { textAnswer, required } = useAppSelector((state) => {
    const question = state.survey.questions[questionIndex];
    if (isLongQuestion(question)) {
      return question;
    }
    return {} as LongQuestion;
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      dispatch(setTextAnswer({ questionIndex, textAnswer: e.target.value }));
    },
    [questionIndex]
  );

  const handleResizeHeight = useCallback(() => {
    if (textarea.current instanceof HTMLTextAreaElement) {
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  }, []);

  return (
    <Wrapper>
      <StyledTextarea ref={textarea} value={textAnswer} onChange={handleChange} onInput={handleResizeHeight} rows={1} />
      {required && <RequiredMessage isAnswered={textAnswer?.replaceAll(" ", "") !== ""} />}
    </Wrapper>
  );
}

export default memo(LongTypeAnswer);
