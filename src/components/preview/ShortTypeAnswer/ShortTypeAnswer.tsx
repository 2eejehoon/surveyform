import { ChangeEvent, memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTextAnswer } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";
import RequiredMessage from "../RequiredMessage/RequiredMessage";
import { Wrapper } from "./ShortTypeAnswerStyle";
import { ShortQuestion, isShortQuestion } from "../../../type";

interface ShortTypeAnswerProps {
  questionIndex: number;
}

function ShortTypeAnswer({ questionIndex }: ShortTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const { textAnswer, required } = useAppSelector((state) => {
    const question = state.survey.questions[questionIndex];
    if (isShortQuestion(question)) {
      return question;
    }
    return {} as ShortQuestion;
  });

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch(setTextAnswer({ questionIndex, textAnswer: e.target.value })),
    [questionIndex]
  );

  return (
    <Wrapper>
      <Input
        id={`short-${questionIndex}`}
        type={"text"}
        value={textAnswer}
        borderBottom={true}
        onChange={handleChange}
      />
      {required && <RequiredMessage isAnswered={textAnswer?.replaceAll(" ", "") !== ""} />}
    </Wrapper>
  );
}

export default memo(ShortTypeAnswer);
