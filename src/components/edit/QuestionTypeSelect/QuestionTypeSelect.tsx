import { ChangeEvent, memo, useCallback } from "react";
import { QUESTION_TYPE } from "../../../constant";
import { StyledSelect } from "./QuestionTypeSelectStyle";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { setQuestionType } from "../../../store/surveySlice";

interface QuestionTypeSelectProps {
  index: number;
}

function QuestionTypeSelect({ index }: QuestionTypeSelectProps) {
  const defaultType = useAppSelector(
    (state) => state.survey.questions[index].type
  );
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) =>
      dispatch(setQuestionType({ index, type: e.target.value })),
    [index]
  );

  return (
    <StyledSelect onChange={handleChange} defaultValue={defaultType}>
      {QUESTION_TYPE.map((type) => {
        return <option key={type}>{type}</option>;
      })}
    </StyledSelect>
  );
}

export default memo(QuestionTypeSelect);
