import { useAppSelector } from "../../../store";
import { StyledP } from "./ShortTypeQuestionStyle";

interface ShortTypeQuestionProps {
  questionIndex: number;
}

function ShortTypeQuestion({ questionIndex }: ShortTypeQuestionProps) {
  const text = useAppSelector((state) => state.survey.questions[questionIndex].text);

  return <StyledP>{text}</StyledP>;
}

export default ShortTypeQuestion;
