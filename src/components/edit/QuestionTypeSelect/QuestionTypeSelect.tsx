import { ChangeEvent, memo, useCallback } from "react";
import { QUESTION_TYPE_ARRAY } from "../../../constant";
import { StyledSelect } from "./QuestionTypeSelectStyle";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { setQuestionType } from "../../../store/surveySlice";

interface QuestionTypeSelectProps {
  questionIndex: number;
}

function QuestionTypeSelect({ questionIndex }: QuestionTypeSelectProps) {
  const type = useAppSelector(
    (state) => state.survey.questions[questionIndex].type
  );
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      dispatch(setQuestionType({ questionIndex, type: e.target.value })),
    [questionIndex]
  );

  return (
    <StyledSelect onChange={handleChange} defaultValue={type}>
      {QUESTION_TYPE_ARRAY.map((type) => {
        return <option key={type}>{type}</option>;
      })}
    </StyledSelect>
  );
}

export default memo(QuestionTypeSelect);
