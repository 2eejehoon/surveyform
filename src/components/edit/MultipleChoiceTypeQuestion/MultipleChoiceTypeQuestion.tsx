import { memo } from "react";
import { StyledList } from "./MultipleChoiceTypeQuestionStyle";
import { v4 as uuid } from "uuid";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { useAppSelector } from "../../../store";

interface MultipleChoiceTypeQuestionProps {
  index: number;
}

function MultipleChoiceTypeQuestion({
  index,
}: MultipleChoiceTypeQuestionProps) {
  const data = useAppSelector(
    (state) => state.survey.questions[index].data
  ) as string[];

  return (
    <StyledList>
      {data.map((choice, idx) => {
        return (
          <li key={idx}>
            <Input
              id={`choice-${uuid()}`}
              type="text"
              value={choice}
              onChange={() => console.log(idx)}
            />
            <Button
              type="button"
              onClick={() => console.log(idx)}
              width={30}
              height={30}
              color="black"
              bgColor="orange"
            >
              삭제
            </Button>
          </li>
        );
      })}
    </StyledList>
  );
}

export default memo(MultipleChoiceTypeQuestion);
