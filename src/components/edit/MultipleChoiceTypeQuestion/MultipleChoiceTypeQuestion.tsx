import { StyledList } from "./MultipleChoiceTypeQuestionStyle";
import { useAppSelector } from "../../../store";
import MultipleChoiceOption from "../MultipleChoiceOption/MultipleChoiceOption";
import AddOptionButton from "../AddOptionButton/AddOptionButton";
import { useRef } from "react";

interface MultipleChoiceTypeQuestionProps {
  questionIndex: number;
}

function MultipleChoiceTypeQuestion({ questionIndex }: MultipleChoiceTypeQuestionProps) {
  const dragStartRef = useRef<number | null>(null);
  const dragEndRef = useRef<number | null>(null);
  const options = useAppSelector(
    (state) => state.survey.questions[questionIndex].options
  );

  return (
    <>
      <StyledList>
        {options!.map((_, optionIndex) => {
          const key = `${questionIndex}-${optionIndex}`;
          return (
            <MultipleChoiceOption
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

export default MultipleChoiceTypeQuestion;
