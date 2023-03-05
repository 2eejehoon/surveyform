import { memo } from "react";
import CopyQuestionButton from "../CopyQuestionButton/CopyQuestionButton";
import DeleteQuestionButton from "../DeleteQuestionButton/DeleteQuestionButton";
import QuestionTitleInput from "../QuestionTitleInput/QuestionTitleInput";
import QuestionTypeSelect from "../QuestionTypeSelect/QuestionTypeSelect";
import { QuestionBody, QuestionFooter, QuestionHeader } from "./QuestionStyle";

interface QuestionProps {
  index: number;
}

function Question({ index }: QuestionProps) {
  return (
    <>
      <QuestionHeader>
        <QuestionTitleInput index={index} />
        <QuestionTypeSelect index={index} />
      </QuestionHeader>
      <QuestionBody>
        <CopyQuestionButton index={index} />
        <DeleteQuestionButton index={index} />
      </QuestionBody>
      <QuestionFooter></QuestionFooter>
    </>
  );
}

export default memo(Question);
