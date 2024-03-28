import { QUESTION_TYPE_MAP } from "../../../type";
import ShortTypeQuestion from "../ShortTypeQuestion/ShortTypeQuestion";
import LongTypeQuestion from "../LongTypeQuestion/LongTypeQuestion";
import MultipleChoiceTypeQuestion from "../MultipleChoiceTypeQuestion/MultipleChoiceTypeQuestion";
import CheckboxTypeQuestion from "../CheckboxTypeQuestion/CheckboxTypeQuestion";
import DropdownTypeQuestion from "../DropdownTypeQuestion/DropdownTypeQuestion";

interface QuestionsRendererProps {
  type: string;
  questionIndex: number;
}

export default function QuestionRenderer({ type, questionIndex }: QuestionsRendererProps) {
  switch (type) {
    case QUESTION_TYPE_MAP.SHORT:
      return <ShortTypeQuestion questionIndex={questionIndex} />;

    case QUESTION_TYPE_MAP.LONG:
      return <LongTypeQuestion questionIndex={questionIndex} />;

    case QUESTION_TYPE_MAP.MULTIPLECHOICE:
      return <MultipleChoiceTypeQuestion questionIndex={questionIndex} />;

    case QUESTION_TYPE_MAP.CHECKBOX:
      return <CheckboxTypeQuestion questionIndex={questionIndex} />;

    case QUESTION_TYPE_MAP.DROPDOWN:
      return <DropdownTypeQuestion questionIndex={questionIndex} />;

    default:
      return null;
  }
}
