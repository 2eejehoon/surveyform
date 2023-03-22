import { useAppSelector } from "../../../store";
import { StyledList } from "./DropdownTypeQuestionStyle";
import DropdownOption from "../DropdownOption/DropdownOption";
import AddOptionButton from "../AddOptionButton/AddOptionButton";
import { useRef } from "react";

interface DropdownTypeQuestionProps {
  questionIndex: number;
}

function DropdownTypeQuestion({ questionIndex }: DropdownTypeQuestionProps) {
  const dragStartRef = useRef<number | null>(null);
  const dragEndRef = useRef<number | null>(null);
  const options = useAppSelector((state) => state.survey.questions[questionIndex].options);

  return (
    <>
      <StyledList>
        {options!.map((_, optionIndex) => {
          const key = `${questionIndex}-${optionIndex}`;
          return (
            <DropdownOption
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

export default DropdownTypeQuestion;
