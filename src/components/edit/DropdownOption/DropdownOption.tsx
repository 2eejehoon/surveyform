import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { StyledLi } from "./DropdownOptionStyle";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionOptionText } from "../../../store/surveySlice";
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
        onClick={() => console.log(1)}
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

export default DropdownOption;
