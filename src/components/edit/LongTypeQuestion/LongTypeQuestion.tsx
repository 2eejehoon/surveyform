import { useAppSelector } from "../../../store";
import { isLongQuestion } from "../../../type";
import { StyledP } from "./LongTypeQuestionStyle";

interface LongTypeQuestionProps {
  questionIndex: number;
}

function LongTypeQuestion({ questionIndex }: LongTypeQuestionProps) {
  const text = useAppSelector((state) => {
    const question = state.survey.questions[questionIndex];
    if (isLongQuestion(question)) {
      return question.text;
    }
  });

  return <StyledP>{text}</StyledP>;
}

export default LongTypeQuestion;
