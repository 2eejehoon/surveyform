import { StyledList } from "./CheckboxTypeQuestionStyle";
import { useAppSelector } from "../../../store";
import CheckboxOption from "../CheckboxOption/CheckboxOption";
import AddOptionButton from "../AddOptionButton/AddOptionButton";

interface CheckboxTypeQuestionProps {
  questionIndex: number;
}

function CheckboxTypeQuestion({ questionIndex }: CheckboxTypeQuestionProps) {
  const options = useAppSelector((state) => state.survey.questions[questionIndex].options);

  return (
    <>
      <StyledList>
        {options!.map((_, optionIndex) => {
          const key = `${questionIndex}-${optionIndex}`;
          return (
            <CheckboxOption key={key} questionIndex={questionIndex} optionIndex={optionIndex} />
          );
        })}
      </StyledList>
      <AddOptionButton questionIndex={questionIndex} />
    </>
  );
}

export default CheckboxTypeQuestion;
