import { StyledList } from "./AnswerListStyle";
import { useAppSelector } from "../../../store/index";
import Answer from "../Answer/Answer";

function AnswerList() {
  const questions = useAppSelector((state) => state.survey.questions);

  return (
    <StyledList>
      {questions.map((_, index) => {
        return <Answer key={index} questionIndex={index} />;
      })}
    </StyledList>
  );
}

export default AnswerList;
