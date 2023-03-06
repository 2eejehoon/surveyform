import { StyledList } from "./QuestionListStyle";
import { useAppSelector } from "../../../store/index";
import Question from "../Question/Question";

function QuestionList() {
  const questions = useAppSelector((state) => state.survey.questions);

  return (
    <StyledList>
      {questions.map((question, index) => {
        return <Question key={question.id} questionIndex={Number(index)} />;
      })}
    </StyledList>
  );
}

export default QuestionList;
