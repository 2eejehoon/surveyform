import {
  QUESTION_TYPE_MAP,
  isCheckboxQuestion,
  isDropdownQuestion,
  isLongQuestion,
  isMultipleQuestion,
  isShortQuestion,
} from "../../../type";
import { useAppSelector } from "../../../store";
import { Wrapper, StyledH, StyledP } from "./SubmitDataStyle";

interface SubmitDataProps {
  questionIndex: number;
}

export default function SubmitData({ questionIndex }: SubmitDataProps) {
  const question = useAppSelector((state) => state.survey.questions[questionIndex]);

  function renderer(type: string) {
    if (isShortQuestion(question)) {
      return question.textAnswer;
    }

    if (isLongQuestion(question)) {
      return question.textAnswer;
    }

    if (isMultipleQuestion(question)) {
      return question.optionAnswer;
    }

    if (isDropdownQuestion(question)) {
      return question.optionAnswer;
    }

    if (isCheckboxQuestion(question)) {
      const filtered = question.options.filter((_, index) => question.checkboxAnswer[index]);
      return filtered?.join(", ");
    }
  }

  return (
    <Wrapper>
      <StyledH>{question.questionTitle}</StyledH>
      <StyledP>{renderer(question.type)}</StyledP>
    </Wrapper>
  );
}
