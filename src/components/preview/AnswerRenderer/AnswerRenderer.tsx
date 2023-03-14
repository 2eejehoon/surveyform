import { QUESTION_TYPE } from "../../../constant";
import CheckboxTypeAnswer from "../CheckboxTypeAnswer/CheckboxTypeAnswer";
import DropdownTypeAnswer from "../DropdownTypeAnswer/DropdownTypeAnswer";
import LongTypeAnswer from "../LongTypeAnswer/LongTypeAnswer";
import MultipleTypeAnswer from "../MultipleTypeAnswer/MultipleTypeAnswer";
import ShortTypeAnswer from "../ShortTypeAnswer/ShortTypeAnswer";

interface AnswerRendererProps {
  type: string;
  questionIndex: number;
}

export default function AnswerRenderer({
  type,
  questionIndex,
}: AnswerRendererProps) {
  switch (type) {
    case QUESTION_TYPE.SHORT:
      return <ShortTypeAnswer questionIndex={questionIndex} />;

    case QUESTION_TYPE.LONG:
      return <LongTypeAnswer questionIndex={questionIndex} />;

    case QUESTION_TYPE.MULTIPLECHOICE:
      return <MultipleTypeAnswer questionIndex={questionIndex} />;

    case QUESTION_TYPE.CHECKBOX:
      return <CheckboxTypeAnswer questionIndex={questionIndex} />;

    case QUESTION_TYPE.DROPDOWN:
      return <DropdownTypeAnswer questionIndex={questionIndex} />;

    default:
      return null;
  }
}
