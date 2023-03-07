import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setOptionAnswer } from "../../../store/surveySlice";
import { StyledSelect } from "./DropdownTypeAnswerStyle";

interface DropdownTypeAnswerProps {
  questionIndex: number;
}

function DropdownTypeAnswer({ questionIndex }: DropdownTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const options = useAppSelector(
    (state) => state.survey.questions[questionIndex].options
  );

  const optionAnswer = useAppSelector(
    (state) => state.survey.questions[questionIndex].optionAnswer
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) =>
    dispatch(setOptionAnswer({ questionIndex, clickedOption: e.target.value }));

  return (
    <StyledSelect onChange={handleChange} value={optionAnswer || "default"}>
      <option value="default" disabled defaultChecked>
        선택
      </option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </StyledSelect>
  );
}

export default DropdownTypeAnswer;
