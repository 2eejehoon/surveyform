import { StyledLi } from "./MultipleChoiceOptionStyle";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { ChangeEvent, useCallback } from "react";
import { useAppDispatch } from "../../../store";
import {
  setQuestionOptionText,
  deleteQuestionOption,
} from "../../../store/surveySlice";

interface MultipleChoiceOptionProps {
  questionIndex: number;
  optionIndex: number;
  option: string;
}

function MultipleChoiceOption({
  questionIndex,
  optionIndex,
  option,
}: MultipleChoiceOptionProps) {
  const dispatch = useAppDispatch();

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
      />
      <Button
        type="button"
        onClick={handleDelete}
        width={30}
        height={30}
        color="black"
        bgColor="pink"
      >
        삭제
      </Button>
    </StyledLi>
  );
}

export default MultipleChoiceOption;
