import { memo } from "react";
import Input from "../../common/Input/Input";
import {
  QuestionBody,
  QuestionFooter,
  QuestionHeader,
  QuestionTypeSelect,
} from "./QuestionStyle";

interface QuestionProps {
  id: string;
}

function Question({ id }: QuestionProps) {
  return (
    <>
      <QuestionHeader>
        <Input
          id="question-title"
          type="text"
          value={"1"}
          onChange={() => console.log(id)}
        />
        <QuestionTypeSelect>
          <option>단답형</option>
          <option>장문형</option>
          <option>객관식</option>
          <option>체크박스</option>
          <option>드롭다운</option>
        </QuestionTypeSelect>
      </QuestionHeader>
      <QuestionBody></QuestionBody>
      <QuestionFooter></QuestionFooter>
    </>
  );
}

export default memo(Question);
