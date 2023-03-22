import { QUESTION_TYPE } from "../../../constant";
import ShortTypeQuestion from "../ShortTypeQuestion/ShortTypeQuestion";
import LongTypeQuestion from "../LongTypeQuestion/LongTypeQuestion";
import MultipleChoiceTypeQuestion from "../MultipleChoiceTypeQuestion/MultipleChoiceTypeQuestion";
import CheckboxTypeQuestion from "../CheckboxTypeQuestion/CheckboxTypeQuestion";
import DropdownTypeQuestion from "../DropdownTypeQuestion/DropdownTypeQuestion";

interface QuestionsRendererProps {
  type: string;
  questionIndex: number;
}

export default function QuestionRenderer({
  type,
  questionIndex,
}: QuestionsRendererProps) {
  switch (type) {
    case QUESTION_TYPE.SHORT:
      return <ShortTypeQuestion questionIndex={questionIndex} />;

    case QUESTION_TYPE.LONG:
      return <LongTypeQuestion questionIndex={questionIndex} />;

    case QUESTION_TYPE.MULTIPLECHOICE:
      return <MultipleChoiceTypeQuestion questionIndex={questionIndex} />;

    case QUESTION_TYPE.CHECKBOX:
      return <CheckboxTypeQuestion questionIndex={questionIndex} />;

    case QUESTION_TYPE.DROPDOWN:
      return <DropdownTypeQuestion questionIndex={questionIndex} />;

    default:
      return null;
  }
}
