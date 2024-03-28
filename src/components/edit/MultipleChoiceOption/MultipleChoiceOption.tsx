import { ChangeEvent, memo, MutableRefObject } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionOptionText } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";
import OptionContainer from "../OptionContainer/OptionContainer";

interface MultipleChoiceOptionProps {
  questionIndex: number;
  optionIndex: number;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
}

function MultipleChoiceOption({ questionIndex, optionIndex, dragStartRef, dragEndRef }: MultipleChoiceOptionProps) {
  const dispatch = useAppDispatch();
  const option = useAppSelector((state) => state.survey.questions[questionIndex].options[optionIndex]);

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
    <OptionContainer
      dragStartRef={dragStartRef}
      dragEndRef={dragEndRef}
      questionIndex={questionIndex}
      optionIndex={optionIndex}
    >
      <Input
        id={`multiple-${questionIndex}-${optionIndex}`}
        type={"text"}
        value={option}
        onChange={handleChange}
        fontSize={14}
      />
    </OptionContainer>
  );
}

export default memo(MultipleChoiceOption);
