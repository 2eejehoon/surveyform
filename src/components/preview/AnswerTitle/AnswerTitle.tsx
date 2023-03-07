import { memo } from "react";
import { useAppSelector } from "../../../store";
import { StyledTitle } from "./AnswerTitleStyle";

interface AnswerTitleProps {
  questionIndex: number;
}

function AnswerTitle({ questionIndex }: AnswerTitleProps) {
  const title = useAppSelector(
    (state) => state.survey.questions[questionIndex].title
  );

  return <StyledTitle>{title}</StyledTitle>;
}

export default memo(AnswerTitle);
