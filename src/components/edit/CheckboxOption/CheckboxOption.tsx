import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  setQuestionOptionText,
  deleteQuestionOption,
} from "../../../store/surveySlice";
import Input from "../../common/Input/Input";
import { StyledLi } from "./CheckboxOptionStyle";
import Button from "../../common/Button/Button";

interface CheckboxOptionProps {
  questionIndex: number;
  optionIndex: number;
}

function CheckboxOption({ questionIndex, optionIndex }: CheckboxOptionProps) {
  const dispatch = useAppDispatch();
  const option = useAppSelector(
    (state) => state.survey.questions[questionIndex].options[optionIndex]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setQuestionOptionText({
        questionIndex,
        optionIndex,
        text: e.target.value,
      })
    );
  };

  const handleDeleteClick = () => {
    dispatch(deleteQuestionOption({ questionIndex, optionIndex }));
  };

  return (
    <StyledLi>
      <Input
        id="checkbox-option"
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

export default CheckboxOption;
