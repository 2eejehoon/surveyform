import { useAppSelector } from "../../../store";
import { StyledP } from "./LongTypeQuestionStyle";

interface LongTypeQuestionProps {
  questionIndex: number;
}

function LongTypeQuestion({ questionIndex }: LongTypeQuestionProps) {
  const text = useAppSelector(
    (state) => state.survey.questions[questionIndex].text
  ) as string;

  return <StyledP>{text}</StyledP>;
}

export default LongTypeQuestion;
