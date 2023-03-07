import { QUESTION_TYPE } from "../../../constant";
import { useAppSelector } from "../../../store";
import AnswerTitle from "../AnswerTitle/AnswerTitle";
import LongTypeAnswer from "../LongTypeAnswer/LongTypeAnswer";
import MultipleTypeAnswer from "../MultipleTypeAnswer/MultipleTypeAnswer";
import ShortTypeAnswer from "../ShortTypeAnswer/ShortTypeAnswer";
import { AnswerBody, AnswerFooter, AnswerHeader, Wrapper } from "./AnswerStyle";

interface AnswerProps {
  questionIndex: number;
}

function Answer({ questionIndex }: AnswerProps) {
  const type = useAppSelector(
    (state) => state.survey.questions[questionIndex].type
  );

  return (
    <Wrapper>
      <AnswerHeader>
        <AnswerTitle questionIndex={questionIndex} />
      </AnswerHeader>
      <AnswerBody>
        {type === QUESTION_TYPE.SHORT && (
          <ShortTypeAnswer questionIndex={questionIndex} />
        )}
        {type === QUESTION_TYPE.LONG && (
          <LongTypeAnswer questionIndex={questionIndex} />
        )}
        {type === QUESTION_TYPE.MULTIPLECHOICE && (
          <MultipleTypeAnswer questionIndex={questionIndex} />
        )}
        {type === QUESTION_TYPE.CHECKBOX && 4}
        {type === QUESTION_TYPE.DROPDOWN && 5}
      </AnswerBody>
      <AnswerFooter></AnswerFooter>
    </Wrapper>
  );
}

export default Answer;
