import { memo } from "react";
import { useAppSelector } from "../../../store";
import { StyledTitle } from "./AnswerTitleStyle";

interface AnswerTitleProps {
  questionIndex: number;
}

function AnswerTitle({ questionIndex }: AnswerTitleProps) {
  const questionTitle = useAppSelector(
    (state) => state.survey.questions[questionIndex].questionTitle
  );

  return <StyledTitle>{questionTitle}</StyledTitle>;
}

export default memo(AnswerTitle);
