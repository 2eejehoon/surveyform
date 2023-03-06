import { memo } from "react";
import { QUESTION_TYPE } from "../../../constant";
import { useAppSelector } from "../../../store";
import CopyQuestionButton from "../CopyQuestionButton/CopyQuestionButton";
import DeleteQuestionButton from "../DeleteQuestionButton/DeleteQuestionButton";
import LongTypeQuestion from "../LongTypeQuestion/LongTypeQuestion";
import QuestionTitleInput from "../QuestionTitleInput/QuestionTitleInput";
import QuestionTypeSelect from "../QuestionTypeSelect/QuestionTypeSelect";
import RequiredQuestionButton from "../RequiredQuestionButton/RequiredQuestionButton";
import ShortTypeQuestion from "../ShortTypeQuestion/ShortTypeQuestion";
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
  const type = useAppSelector((state) => state.survey.questions[index].type);

  return (
    <Wrapper>
      <QuestionHeader>
        <QuestionTitleInput index={index} />
        <QuestionTypeSelect index={index} />
      </QuestionHeader>
      <QuestionBody>
        {type === QUESTION_TYPE.SHORT && <ShortTypeQuestion index={index} />}
        {type === QUESTION_TYPE.LONG && <LongTypeQuestion index={index} />}
        {type === QUESTION_TYPE.MULTIPLECHOICE && (
          <LongTypeQuestion index={index} />
        )}
        {type === QUESTION_TYPE.CHECKBOX && <LongTypeQuestion index={index} />}
        {type === QUESTION_TYPE.DROPDOWN && <LongTypeQuestion index={index} />}
      </QuestionBody>
      <QuestionFooter>
        <CopyQuestionButton index={index} />
        <DeleteQuestionButton index={index} />
        <RequiredQuestionButton index={index} />
      </QuestionFooter>
    </Wrapper>
  );
}

export default memo(Question);
