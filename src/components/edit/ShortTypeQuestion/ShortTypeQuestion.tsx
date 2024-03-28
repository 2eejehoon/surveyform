import { useAppSelector } from "../../../store";
import { isShortQuestion } from "../../../type";
import { StyledP } from "./ShortTypeQuestionStyle";

interface ShortTypeQuestionProps {
  questionIndex: number;
}

function ShortTypeQuestion({ questionIndex }: ShortTypeQuestionProps) {
  const text = useAppSelector((state) => {
    const question = state.survey.questions[questionIndex];
    if (isShortQuestion(question)) {
      return question.text;
    }
  });

  return <StyledP>{text}</StyledP>;
}

export default ShortTypeQuestion;
