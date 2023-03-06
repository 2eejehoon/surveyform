import { useCallback } from "react";
import { StyledList } from "./MultipleChoiceTypeQuestionStyle";
import Button from "../../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../store";
import { addQuestionOption } from "../../../store/surveySlice";
import MultipleChoiceOption from "../MultipleChoiceOption/MultipleChoiceOption";

interface MultipleChoiceTypeQuestionProps {
  questionIndex: number;
}

function MultipleChoiceTypeQuestion({
  questionIndex,
}: MultipleChoiceTypeQuestionProps) {
  const options = useAppSelector(
    (state) => state.survey.questions[questionIndex].options
  ) as string[];

  const dispatch = useAppDispatch();

  const handleOptionAddClick = useCallback(
    () => dispatch(addQuestionOption({ questionIndex })),
    [questionIndex]
  );

  return (
    <>
      <StyledList>
        {options.map((option, optionIndex) => {
          return (
            <MultipleChoiceOption
              key={optionIndex}
              questionIndex={questionIndex}
              optionIndex={optionIndex}
              option={option}
            />
          );
        })}
      </StyledList>
      <Button
        type="button"
        onClick={handleOptionAddClick}
        width={30}
        height={30}
        color="black"
        bgColor="yellow"
      >
        옵션 추가
      </Button>
    </>
  );
}

export default MultipleChoiceTypeQuestion;
