import { QUESTION_TYPE_MAP } from "../../../type";
import { useAppSelector } from "../../../store";
import { Wrapper, StyledH, StyledP } from "./SubmitDataStyle";

interface SubmitDataProps {
  questionIndex: number;
}

export default function SubmitData({ questionIndex }: SubmitDataProps) {
  const { type, questionTitle, options, textAnswer, optionAnswer, checkboxAnswer } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
  );

  function renderer(type: string) {
    switch (type) {
      case QUESTION_TYPE_MAP.SHORT:
      case QUESTION_TYPE_MAP.LONG:
        return textAnswer;

      case QUESTION_TYPE_MAP.MULTIPLECHOICE:
      case QUESTION_TYPE_MAP.DROPDOWN:
        return optionAnswer;

      case QUESTION_TYPE_MAP.CHECKBOX:
        const filtered = options?.filter((_, index) => checkboxAnswer![index]);
        return filtered?.join(", ");

      default:
        return "";
    }
  }

  return (
    <Wrapper>
      <StyledH>{questionTitle}</StyledH>
      <StyledP>{renderer(type)}</StyledP>
    </Wrapper>
  );
}
