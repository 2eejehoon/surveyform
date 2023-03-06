import { QUESTION_TYPE } from "../../../constant";
import { useAppSelector } from "../../../store";
import CheckboxTypeQuestion from "../CheckboxTypeQuestion/CheckboxTypeQuestion";
import CopyQuestionButton from "../CopyQuestionButton/CopyQuestionButton";
import DeleteQuestionButton from "../DeleteQuestionButton/DeleteQuestionButton";
import LongTypeQuestion from "../LongTypeQuestion/LongTypeQuestion";
import MultipleChoiceTypeQuestion from "../MultipleChoiceTypeQuestion/MultipleChoiceTypeQuestion";
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
  questionIndex: number;
}

function Question({ questionIndex }: QuestionProps) {
  const type = useAppSelector(
    (state) => state.survey.questions[questionIndex].type
  );

  return (
    <Wrapper>
      <QuestionHeader>
        <QuestionTitleInput questionIndex={questionIndex} />
        <QuestionTypeSelect questionIndex={questionIndex} />
      </QuestionHeader>
      <QuestionBody>
        {type === QUESTION_TYPE.SHORT && (
          <ShortTypeQuestion questionIndex={questionIndex} />
        )}
        {type === QUESTION_TYPE.LONG && (
          <LongTypeQuestion questionIndex={questionIndex} />
        )}
        {type === QUESTION_TYPE.MULTIPLECHOICE && (
          <MultipleChoiceTypeQuestion questionIndex={questionIndex} />
        )}
        {type === QUESTION_TYPE.CHECKBOX && (
          <CheckboxTypeQuestion questionIndex={questionIndex} />
        )}
        {type === QUESTION_TYPE.DROPDOWN && (
          <LongTypeQuestion questionIndex={questionIndex} />
        )}
      </QuestionBody>
      <QuestionFooter>
        <CopyQuestionButton questionIndex={questionIndex} />
        <DeleteQuestionButton questionIndex={questionIndex} />
        <RequiredQuestionButton questionIndex={questionIndex} />
      </QuestionFooter>
    </Wrapper>
  );
}

export default Question;
