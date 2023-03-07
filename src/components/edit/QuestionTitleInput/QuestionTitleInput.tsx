import Input from "../../common/Input/Input";
import { ChangeEvent, useCallback, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { setQuestionTitle } from "../../../store/surveySlice";

interface QuestionTitleInputProps {
  questionIndex: number;
}

function QuestionTitleInput({ questionIndex }: QuestionTitleInputProps) {
  const dispatch = useAppDispatch();
  const title = useAppSelector(
    (state) => state.survey.questions[questionIndex].title
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(setQuestionTitle({ questionIndex, title: e.target.value })),
    [questionIndex]
  );

  return (
    <Input
      id="question-title"
      type="text"
      value={title}
      onChange={handleChange}
      fontSize={18}
      placeholder="질문"
    />
  );
}

export default memo(QuestionTitleInput);
