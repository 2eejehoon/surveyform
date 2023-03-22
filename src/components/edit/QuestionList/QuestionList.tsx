import { StyledList } from "./QuestionListStyle";
import { useAppSelector } from "../../../store/index";
import Question from "../Question/Question";
import { useRef } from "react";

function QuestionList() {
  const questions = useAppSelector((state) => state.survey.questions);
  const dragStartRef = useRef<number | null>(null);
  const dragEndRef = useRef<number | null>(null);

  return (
    <StyledList>
      {questions.map((_, index) => {
        return (
          <Question
            key={index}
            questionIndex={index}
            dragStartRef={dragStartRef}
            dragEndRef={dragEndRef}
          />
        );
      })}
    </StyledList>
  );
}

export default QuestionList;
