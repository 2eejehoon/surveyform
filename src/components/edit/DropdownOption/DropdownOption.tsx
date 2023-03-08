import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { StyledLi } from "./DropdownOptionStyle";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  deleteQuestionOption,
  setQuestionOptionText,
} from "../../../store/surveySlice";
import { ChangeEvent } from "react";

interface DropdownOptionProps {
  questionIndex: number;
  optionIndex: number;
}

function DropdownOption({ questionIndex, optionIndex }: DropdownOptionProps) {
  const dispatch = useAppDispatch();
  const option = useAppSelector(
    (state) => state.survey.questions[questionIndex].options[optionIndex]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setQuestionOptionText({
        questionIndex,
        optionIndex,
        text: e.target.value,
      })
    );

  const handleDeleteClick = () => {
    dispatch(deleteQuestionOption({ questionIndex, optionIndex }));
  };

  return (
    <StyledLi>
      <Input
        id="dropdown-option"
        type="text"
        value={option}
        onChange={handleChange}
      />
      <Button
        type="button"
        onClick={handleDeleteClick}
        width={30}
        height={30}
        fontSize={18}
        color="black"
        bgColor="white"
      >
        X
      </Button>
    </StyledLi>
  );
}

export default DropdownOption;
