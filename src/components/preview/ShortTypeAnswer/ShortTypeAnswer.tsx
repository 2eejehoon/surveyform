import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTextAnswer } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";

interface ShortTypeAnswerProps {
  questionIndex: number;
}

function ShortTypeAnswer({ questionIndex }: ShortTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const textAnswer = useAppSelector(
    (state) => state.survey.questions[questionIndex].textAnswer
  ) as string;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setTextAnswer({ questionIndex, textAnswer: e.target.value }));

  return (
    <Input
      id="short-answer"
      type="text"
      value={textAnswer}
      borderBottom={true}
      onChange={handleChange}
    />
  );
}

export default ShortTypeAnswer;
