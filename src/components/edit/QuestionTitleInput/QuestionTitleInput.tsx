import Input from "../../common/Input/Input";
import { ChangeEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { setQuestionTitle } from "../../../store/surveySlice";

interface QuestionTitleInputProps {
  questionIndex: number;
}

function QuestionTitleInput({ questionIndex }: QuestionTitleInputProps) {
  const dispatch = useAppDispatch();
  const questionTitle = useAppSelector((state) => state.survey.questions[questionIndex].questionTitle);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch(setQuestionTitle({ questionIndex, questionTitle: e.target.value })),
    [questionIndex]
  );

  return (
    <Input
      id={`question-title-${questionIndex}`}
      type={"text"}
      value={questionTitle}
      onChange={handleChange}
      fontSize={18}
      placeholder={"질문"}
    />
  );
}

export default QuestionTitleInput;
