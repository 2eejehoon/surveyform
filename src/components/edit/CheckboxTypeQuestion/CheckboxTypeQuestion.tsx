import { StyledList } from "./CheckboxTypeQuestionStyle";
import { useAppSelector } from "../../../store";
import CheckboxOption from "../CheckboxOption/CheckboxOption";
import AddOptionButton from "../AddOptionButton/AddOptionButton";
import { useRef } from "react";

interface CheckboxTypeQuestionProps {
  questionIndex: number;
}

function CheckboxTypeQuestion({ questionIndex }: CheckboxTypeQuestionProps) {
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
