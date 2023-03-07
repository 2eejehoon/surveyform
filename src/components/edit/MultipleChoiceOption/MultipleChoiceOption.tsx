import { StyledLi } from "./MultipleChoiceOptionStyle";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { ChangeEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  setQuestionOptionText,
  deleteQuestionOption,
} from "../../../store/surveySlice";

interface MultipleChoiceOptionProps {
  questionIndex: number;
  optionIndex: number;
}

function MultipleChoiceOption({
  questionIndex,
  optionIndex,
}: MultipleChoiceOptionProps) {
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

  const handleDelete = useCallback(
    () => dispatch(deleteQuestionOption({ questionIndex, optionIndex })),
    [questionIndex, optionIndex]
  );

  return (
    <StyledLi>
      <Input
        id="muitiple-option"
        type="text"
        value={option}
        onChange={handleChange}
        fontSize={14}
      />
      <Button
        type="button"
        onClick={handleDelete}
        width={20}
        height={20}
        fontSize={16}
        color="black"
        bgColor="white"
      >
        X
      </Button>
    </StyledLi>
  );
}

export default MultipleChoiceOption;
