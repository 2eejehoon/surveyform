import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionRequired } from "../../../store/surveySlice";
import { ToggleButton, ToggleSwitch } from "./RequiredToggleStyle";

interface RequiredQuestionButtonProps {
  questionIndex: number;
}

function RequiredQuestionToggle({
  questionIndex,
}: RequiredQuestionButtonProps) {
  const toggleId = `required-toggle-${questionIndex}`;
  const dispatch = useAppDispatch();
  const required = useAppSelector(
    (state) => state.survey.questions[questionIndex].required
  );

  const handleClick = () => dispatch(setQuestionRequired({ questionIndex }));

  return (
    <>
      <ToggleSwitch htmlFor={toggleId} checked={required}>
        <ToggleButton checked={required} />
      </ToggleSwitch>
      <input id={toggleId} type="checkbox" hidden onClick={handleClick} />
    </>
  );
}

export default RequiredQuestionToggle;
