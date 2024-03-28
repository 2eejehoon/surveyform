import { StyledList } from "./CheckboxTypeQuestionStyle";
import { useAppSelector } from "../../../store";
import CheckboxOption from "../CheckboxOption/CheckboxOption";
import AddOptionButton from "../AddOptionButton/AddOptionButton";
import { useRef } from "react";
import { isCheckboxQuestion } from "../../../type";

interface CheckboxTypeQuestionProps {
  questionIndex: number;
}

function CheckboxTypeQuestion({ questionIndex }: CheckboxTypeQuestionProps) {
  const dragStartRef = useRef<number | null>(null);
  const dragEndRef = useRef<number | null>(null);

  const options = useAppSelector((state) => {
    const question = state.survey.questions[questionIndex];
    if (isCheckboxQuestion(question)) {
      return question.options;
    }
  });

  return (
    <>
      <StyledList>
        {(options ?? []).map((_, optionIndex) => {
          const key = `${questionIndex}-${optionIndex}`;
          return (
            <CheckboxOption
              key={key}
              questionIndex={questionIndex}
              optionIndex={optionIndex}
              dragStartRef={dragStartRef}
              dragEndRef={dragEndRef}
            />
          );
        })}
      </StyledList>
      <AddOptionButton questionIndex={questionIndex} />
    </>
  );
}

export default CheckboxTypeQuestion;
