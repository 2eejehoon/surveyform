import { ChangeEvent, memo } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setOptionAnswer } from "../../../store/surveySlice";
import { StyledSelect, Wrapper } from "./DropdownTypeAnswerStyle";
import RequiredMessage from "../RequiredMessage/RequiredMessage";
import { DropdownQuestion, isDropdownQuestion } from "../../../type";

interface DropdownTypeAnswerProps {
  questionIndex: number;
}

function DropdownTypeAnswer({ questionIndex }: DropdownTypeAnswerProps) {
  const dispatch = useAppDispatch();
  const { options, optionAnswer, required } = useAppSelector((state) => {
    const question = state.survey.questions[questionIndex];
    if (isDropdownQuestion(question)) {
      return question;
    }
    return {} as DropdownQuestion;
  });

  const seletedValue = optionAnswer || "default";

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOptionAnswer({ questionIndex, clickedOption: e.target.value }));
  };

  return (
    <Wrapper>
      <StyledSelect onChange={handleChange} value={seletedValue}>
        <option value={"default"} disabled defaultChecked>
          선택
        </option>
        {(options ?? []).map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </StyledSelect>
      {required && <RequiredMessage isAnswered={optionAnswer !== ""} />}
    </Wrapper>
  );
}

export default memo(DropdownTypeAnswer);
