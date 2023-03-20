import Input from "../../common/Input/Input";
import { StyledLi } from "./DropdownOptionStyle";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionOptionText } from "../../../store/surveySlice";
import { ChangeEvent, memo } from "react";
import DeleteOptionButton from "../DeleteOptionButton/DeleteOptionButton";

interface DropdownOptionProps {
  questionIndex: number;
  optionIndex: number;
}

function DropdownOption({ questionIndex, optionIndex }: DropdownOptionProps) {
  const dispatch = useAppDispatch();
  const option = useAppSelector(
    (state) => state.survey.questions[questionIndex].options![optionIndex]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setQuestionOptionText({
        questionIndex,
        optionIndex,
        text: e.target.value,
      })
    );

  return (
    <StyledLi>
      <Input
        id="dropdown-option"
        type="text"
        value={option}
        onChange={handleChange}
        fontSize={14}
      />
      <DeleteOptionButton questionIndex={questionIndex} optionIndex={optionIndex} />
    </StyledLi>
  );
}

export default memo(DropdownOption);
