import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTextAnswer } from "../../../store/surveySlice";
import { StyledTextarea } from "./LongTypeAnswerStyle";

interface LongTypeAnswerProps {
  questionIndex: number;
}

function LongTypeAnswer({ questionIndex }: LongTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const textAnswer = useAppSelector(
    (state) => state.survey.questions[questionIndex].textAnswer
  ) as string;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch(setTextAnswer({ questionIndex, textAnswer: e.target.value }));

  return <StyledTextarea value={textAnswer} onChange={handleChange} />;
}

export default LongTypeAnswer;
