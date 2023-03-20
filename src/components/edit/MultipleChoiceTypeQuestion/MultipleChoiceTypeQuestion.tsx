import { StyledList } from "./MultipleChoiceTypeQuestionStyle";
import { useAppSelector } from "../../../store";
import MultipleChoiceOption from "../MultipleChoiceOption/MultipleChoiceOption";
import AddOptionButton from "../AddOptionButton/AddOptionButton";

interface MultipleChoiceTypeQuestionProps {
  questionIndex: number;
}

function MultipleChoiceTypeQuestion({ questionIndex }: MultipleChoiceTypeQuestionProps) {
  const options = useAppSelector((state) => state.survey.questions[questionIndex].options);

  return (
    <>
      <StyledList>
        {options!.map((_, optionIndex) => {
          return (
            <MultipleChoiceOption
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

export default MultipleChoiceTypeQuestion;
