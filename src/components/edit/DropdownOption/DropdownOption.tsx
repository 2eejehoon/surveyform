import Input from "../../common/Input/Input";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionOptionText } from "../../../store/surveySlice";
import { ChangeEvent, memo, MutableRefObject } from "react";
import DeleteOptionButton from "../DeleteOptionButton/DeleteOptionButton";
import OptionContainer from "../OptionContainer/OptionContainer";

interface DropdownOptionProps {
  questionIndex: number;
  optionIndex: number;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
}

function DropdownOption({
  questionIndex,
  optionIndex,
  dragStartRef,
  dragEndRef,
}: DropdownOptionProps) {
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
      <DeleteOptionButton questionIndex={questionIndex} optionIndex={optionIndex} />
    </OptionContainer>
  );
}

export default memo(DropdownOption);
