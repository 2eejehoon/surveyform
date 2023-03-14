import { useAppDispatch, useAppSelector } from "../../../store";
import { StyledList } from "./DropdownTypeQuestionStyle";
import { addQuestionOption } from "../../../store/surveySlice";
import DropdownOption from "../DropdownOption/DropdownOption";
import Button from "../../common/Button/Button";

interface DropdownTypeQuestionProps {
  questionIndex: number;
}

function DropdownTypeQuestion({ questionIndex }: DropdownTypeQuestionProps) {
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
            <DropdownOption
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

export default DropdownTypeQuestion;
