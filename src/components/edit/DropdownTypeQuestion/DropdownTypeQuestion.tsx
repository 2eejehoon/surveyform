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
          return (
            <DropdownOption
              key={optionIndex}
              questionIndex={questionIndex}
              optionIndex={optionIndex}
            />
          );
        })}
      </StyledList>
      <AddOptionButton questionIndex={questionIndex} />
    </>
  );
}

export default DropdownTypeQuestion;
