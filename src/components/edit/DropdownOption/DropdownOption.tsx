import Input from "../../common/Input/Input";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionOptionText } from "../../../store/surveySlice";
import { ChangeEvent, memo, MutableRefObject } from "react";
import OptionContainer from "../OptionContainer/OptionContainer";
import { isDropdownQuestion } from "../../../type";

interface DropdownOptionProps {
  questionIndex: number;
  optionIndex: number;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
}

function DropdownOption({ questionIndex, optionIndex, dragStartRef, dragEndRef }: DropdownOptionProps) {
  const dispatch = useAppDispatch();
  const option = useAppSelector((state) => {
    const question = state.survey.questions[questionIndex];
    if (isDropdownQuestion(question)) {
      return question.options[optionIndex];
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setQuestionOptionText({
        questionIndex,
        optionIndex,
        text: e.target.value,
      })
    );

  return (
    <OptionContainer
      dragStartRef={dragStartRef}
      dragEndRef={dragEndRef}
      questionIndex={questionIndex}
      optionIndex={optionIndex}
    >
      <Input
        id={`dropdown-${questionIndex}-${optionIndex}`}
        type={"text"}
        value={option}
        onChange={handleChange}
        fontSize={14}
      />
    </OptionContainer>
  );
}

export default memo(DropdownOption);
