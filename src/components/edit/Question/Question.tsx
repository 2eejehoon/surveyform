import { memo } from "react";
import CopyQuestionButton from "../CopyQuestionButton/CopyQuestionButton";
import DeleteQuestionButton from "../DeleteQuestionButton/DeleteQuestionButton";
import QuestionTitleInput from "../QuestionTitleInput/QuestionTitleInput";
import QuestionTypeSelect from "../QuestionTypeSelect/QuestionTypeSelect";
import RequiredQuestionButton from "../RequiredQuestionButton/RequiredQuestionButton";
import {
  QuestionBody,
  QuestionFooter,
  QuestionHeader,
  Wrapper,
} from "./QuestionStyle";

interface QuestionProps {
  index: number;
}

function Question({ index }: QuestionProps) {
  return (
    <Wrapper>
      <QuestionHeader>
        <QuestionTitleInput index={index} />
        <QuestionTypeSelect index={index} />
      </QuestionHeader>
      <QuestionBody>
        <CopyQuestionButton index={index} />
        <DeleteQuestionButton index={index} />
        <RequiredQuestionButton index={index} />
      </QuestionBody>
      <QuestionFooter></QuestionFooter>
    </Wrapper>
  );
}

export default memo(Question);
