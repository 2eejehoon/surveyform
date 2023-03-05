import { memo } from "react";
import { StyledList } from "./QuestionListStyle";
import { useAppSelector } from "../../../store/index";
import Question from "../Question/Question";

function QuestionList() {
  const questions = useAppSelector((state) => state.survey.questions);

  return (
    <StyledList>
      {questions.map((question, index) => {
        return <Question key={question.id} index={Number(index)} />;
      })}
    </StyledList>
  );
}

export default memo(QuestionList);
