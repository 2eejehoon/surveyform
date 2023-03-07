import { QUESTION_TYPE } from "../../../constant";
import { useAppSelector } from "../../../store";
import AnswerTitle from "../AnswerTitle/AnswerTitle";
import CheckboxTypeAnswer from "../CheckboxTypeAnswer/CheckboxTypeAnswer";
import DropdownTypeAnswer from "../DropdownTypeAnswer/DropdownTypeAnswer";
import LongTypeAnswer from "../LongTypeAnswer/LongTypeAnswer";
import MultipleTypeAnswer from "../MultipleTypeAnswer/MultipleTypeAnswer";
import ShortTypeAnswer from "../ShortTypeAnswer/ShortTypeAnswer";
import { AnswerBody, AnswerFooter, AnswerHeader, Wrapper } from "./AnswerStyle";
import { memo } from "react";

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
        {type === QUESTION_TYPE.CHECKBOX && (
          <CheckboxTypeAnswer questionIndex={questionIndex} />
        )}
        {type === QUESTION_TYPE.DROPDOWN && (
          <DropdownTypeAnswer questionIndex={questionIndex} />
        )}
      </AnswerBody>
      <AnswerFooter></AnswerFooter>
    </Wrapper>
  );
}

export default memo(Answer);
