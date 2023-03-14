import { useAppSelector } from "../../../store";
import AnswerTitle from "../AnswerTitle/AnswerTitle";
import { AnswerBody, AnswerHeader, Wrapper } from "./AnswerStyle";
import { memo } from "react";
import AnswerRenderer from "../AnswerRenderer/AnswerRenderer";

interface AnswerProps {
  questionIndex: number;
}

function Answer({ questionIndex }: AnswerProps) {
  const type = useAppSelector(
    (state) => state.survey.questions[questionIndex].type
  );

  return (
    <Wrapper>
      <AnswerHeader>
        <AnswerTitle questionIndex={questionIndex} />
      </AnswerHeader>
      <AnswerBody>
        <AnswerRenderer type={type} questionIndex={questionIndex} />
      </AnswerBody>
    </Wrapper>
  );
}

export default memo(Answer);
