import { ChangeEvent } from "react";
import { QUESTION_TYPE, QUESTION_TYPE_ARRAY } from "../../../type";
import { StyledSelect } from "./QuestionTypeSelectStyle";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { setQuestionType } from "../../../store/surveySlice";

interface QuestionTypeSelectProps {
  questionIndex: number;
}

function QuestionTypeSelect({ questionIndex }: QuestionTypeSelectProps) {
  const dispatch = useAppDispatch();
  const defaultType = useAppSelector((state) => state.survey.questions[questionIndex].type);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setQuestionType({ questionIndex, type: e.target.value as QUESTION_TYPE }));
  };

  return (
    <StyledSelect onChange={handleChange} value={defaultType}>
      {QUESTION_TYPE_ARRAY.map((type) => {
        return (
          <option key={type} value={type}>
            {type}
          </option>
        );
      })}
    </StyledSelect>
  );
}

export default QuestionTypeSelect;
