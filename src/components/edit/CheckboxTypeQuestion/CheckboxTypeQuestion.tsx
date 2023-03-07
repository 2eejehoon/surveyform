import { StyledList } from "./CheckboxTypeQuestionStyle";
import { useAppDispatch, useAppSelector } from "../../../store";
import { addQuestionOption } from "../../../store/surveySlice";
import CheckboxOption from "../CheckboxOption/CheckboxOption";
import Button from "../../common/Button/Button";

interface CheckboxTypeQuestionProps {
  questionIndex: number;
}

function CheckboxTypeQuestion({ questionIndex }: CheckboxTypeQuestionProps) {
  const dispatch = useAppDispatch();
  const options = useAppSelector(
    (state) => state.survey.questions[questionIndex].options
  );

  const handleOptionAddClick = () =>
    dispatch(addQuestionOption({ questionIndex }));

  console.log("1");
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

export default CheckboxTypeQuestion;
