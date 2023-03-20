import { memo } from "react";
import { useAppSelector } from "../../../store";
import CopyQuestionButton from "../CopyQuestionButton/CopyQuestionButton";
import DeleteQuestionButton from "../DeleteQuestionButton/DeleteQuestionButton";
import QuestionRenderer from "../QuestionRenderer/QuestionRenderer";
import QuestionTitleInput from "../QuestionTitleInput/QuestionTitleInput";
import QuestionTypeSelect from "../QuestionTypeSelect/QuestionTypeSelect";
import RequiredQuestionToggle from "../RequiredQuestionButton/RequiredQuestionToggle";
import { QuestionBody, QuestionFooter, QuestionHeader, Wrapper } from "./QuestionStyle";

interface QuestionProps {
  questionIndex: number;
}

function Question({ questionIndex }: QuestionProps) {
  const type = useAppSelector((state) => state.survey.questions[questionIndex].type);

  return (
    <Wrapper>
      <QuestionHeader>
        <QuestionTitleInput questionIndex={questionIndex} />
        <QuestionTypeSelect questionIndex={questionIndex} />
      </QuestionHeader>
      <QuestionBody>
        <QuestionRenderer type={type} questionIndex={questionIndex} />
      </QuestionBody>
      <QuestionFooter>
        <CopyQuestionButton questionIndex={questionIndex} />
        <DeleteQuestionButton questionIndex={questionIndex} />
        <RequiredQuestionToggle questionIndex={questionIndex} />
      </QuestionFooter>
    </Wrapper>
  );
}

export default memo(Question);
