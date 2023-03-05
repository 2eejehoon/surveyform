import Input from "../../common/Input/Input";
import { ChangeEvent, memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { setQuestionTitle } from "../../../store/surveySlice";

interface QuestionTitleInputProps {
  index: number;
}

function QuestionTitleInput({ index }: QuestionTitleInputProps) {
  const title = useAppSelector((state) => state.survey.questions[index].title);
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(
        setQuestionTitle({ index: Number(index), title: e.target.value })
      ),
    [index]
  );

  return (
    <Input
      id="question-title"
      type="text"
      value={title}
      onChange={handleChange}
    />
  );
}

export default memo(QuestionTitleInput);
