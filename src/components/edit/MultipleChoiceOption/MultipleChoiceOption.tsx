import { StyledLi } from "./MultipleChoiceOptionStyle";
import { ChangeEvent, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionOptionText } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";
import DeleteOptionButton from "../DeleteOptionButton/DeleteOptionButton";

interface MultipleChoiceOptionProps {
  questionIndex: number;
  optionIndex: number;
}

function MultipleChoiceOption({ questionIndex, optionIndex }: MultipleChoiceOptionProps) {
  const dispatch = useAppDispatch();
  const option = useAppSelector(
    (state) => state.survey.questions[questionIndex].options![optionIndex]
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

  return (
    <StyledLi>
      <Input
        id="muitiple-option"
        type="text"
        value={option}
        onChange={handleChange}
        fontSize={14}
      />
      <DeleteOptionButton questionIndex={questionIndex} optionIndex={optionIndex} />
    </StyledLi>
  );
}

export default memo(MultipleChoiceOption);
