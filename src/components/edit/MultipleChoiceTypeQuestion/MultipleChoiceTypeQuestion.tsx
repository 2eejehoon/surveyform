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
  const dispatch = useAppDispatch();
  const options = useAppSelector(
    (state) => state.survey.questions[questionIndex].options
  );

  const handleOptionAddClick = () => {
    dispatch(addQuestionOption({ questionIndex }));
  };

  return (
    <>
      <StyledList>
        {options!.map((_, optionIndex) => {
          return (
            <MultipleChoiceOption
              key={optionIndex}
              questionIndex={questionIndex}
              optionIndex={optionIndex}
            />
          );
        })}
      </StyledList>
      <Button
        type="button"
        onClick={handleOptionAddClick}
        width={60}
        height={30}
        fontSize={14}
        color="grey"
        bgColor="white"
      >
        옵션 추가
      </Button>
    </>
  );
}

export default MultipleChoiceTypeQuestion;
