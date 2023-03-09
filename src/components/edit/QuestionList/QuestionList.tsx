import { StyledList } from "./QuestionListStyle";
import { useAppSelector } from "../../../store/index";
import Question from "../Question/Question";

function QuestionList() {
  const questions = useAppSelector((state) => state.survey.questions);

  return (
    <StyledList>
      {questions.map((_, index) => {
        return <Question key={index} questionIndex={index} />;
      })}
    </StyledList>
  );
}

export default QuestionList;
