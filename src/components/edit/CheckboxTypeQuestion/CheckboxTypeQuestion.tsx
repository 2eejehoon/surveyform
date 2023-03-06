import { useCallback } from "react";
import { StyledList } from "./CheckboxTypeQuestionStyle";
import { useAppDispatch, useAppSelector } from "../../../store";
import { addQuestionOption } from "../../../store/surveySlice";
import CheckboxOption from "../CheckboxOption/CheckboxOption";
import Button from "../../common/Button/Button";

interface CheckboxTypeQuestion {
  questionIndex: number;
}

function CheckboxTypeQuestion({ questionIndex }: CheckboxTypeQuestion) {
  const dispatch = useAppDispatch();
  const options = useAppSelector(
    (state) => state.survey.questions[questionIndex].options
  );

  const handleOptionAddClick = useCallback(
    () => dispatch(addQuestionOption({ questionIndex })),
    [questionIndex]
  );

  return (
    <>
      <StyledList>
        {options.map((_, optionIndex) => {
          return (
            <CheckboxOption
              questionIndex={questionIndex}
              optionIndex={optionIndex}
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

export default CheckboxTypeQuestion;
