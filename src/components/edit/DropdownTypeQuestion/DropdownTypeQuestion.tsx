import { useAppSelector } from "../../../store";
import { StyledList } from "./DropdownTypeQuestionStyle";
import DropdownOption from "../DropdownOption/DropdownOption";
import AddOptionButton from "../AddOptionButton/AddOptionButton";

interface DropdownTypeQuestionProps {
  questionIndex: number;
}

function DropdownTypeQuestion({ questionIndex }: DropdownTypeQuestionProps) {
  const options = useAppSelector((state) => state.survey.questions[questionIndex].options);

  return (
    <>
      <StyledList>
        {options!.map((_, optionIndex) => {
          const key = `${questionIndex}-${optionIndex}`;
          return (
            <DropdownOption key={key} questionIndex={questionIndex} optionIndex={optionIndex} />
          );
        })}
      </StyledList>
      <AddOptionButton questionIndex={questionIndex} />
    </>
  );
}

export default DropdownTypeQuestion;
