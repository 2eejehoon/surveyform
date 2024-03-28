import { memo, MutableRefObject } from "react";
import { useAppSelector } from "../../../store";
import { QuestionBody, QuestionFooter, QuestionHeader } from "./QuestionStyle";
import QuestionContainer from "../QuestionContainer/QuestionContainer";
import CopyQuestionButton from "../CopyQuestionButton/CopyQuestionButton";
import DeleteQuestionButton from "../DeleteQuestionButton/DeleteQuestionButton";
import QuestionRenderer from "../QuestionRenderer/QuestionRenderer";
import QuestionTitleInput from "../QuestionTitleInput/QuestionTitleInput";
import QuestionTypeSelect from "../QuestionTypeSelect/QuestionTypeSelect";
import RequiredQuestionToggle from "../RequiredQuestionButton/RequiredQuestionToggle";
interface QuestionProps {
  questionIndex: number;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
}

function Question({ questionIndex, dragStartRef, dragEndRef }: QuestionProps) {
  const type = useAppSelector((state) => state.survey.questions[questionIndex].type);

  return (
    <QuestionContainer dragStartRef={dragStartRef} dragEndRef={dragEndRef} questionIndex={questionIndex}>
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
    </QuestionContainer>
  );
}

export default memo(Question);
