import { QUESTION_TYPE } from "../../../constant";
import { useAppSelector } from "../../../store";
import { Wrapper, StyledP } from "./SubmitDataStyle";

interface SubmitDataProps {
  questionIndex: number;
}

export default function SubmitData({ questionIndex }: SubmitDataProps) {
  const { type, questionTitle, textAnswer, optionAnswer, checkboxAnswer } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
  );

  function renderer(type: string) {
    switch (type) {
      case QUESTION_TYPE.SHORT:
      case QUESTION_TYPE.LONG:
        return textAnswer;

      case QUESTION_TYPE.MULTIPLECHOICE:
      case QUESTION_TYPE.DROPDOWN:
        return optionAnswer;

      case QUESTION_TYPE.CHECKBOX:
        return checkboxAnswer?.join(", ");

      default:
        break;
    }
  }

  return (
    <Wrapper>
      <h4>{questionTitle}</h4>
      <StyledP>{renderer(type)}</StyledP>
    </Wrapper>
  );
}
