import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionRequired } from "../../../store/surveySlice";
import Button from "../../common/Button/Button";

interface RequiredQuestionButtonProps {
  questionIndex: number;
}

function RequiredQuestionButton({
  questionIndex,
}: RequiredQuestionButtonProps) {
  const dispatch = useAppDispatch();
  const required = useAppSelector(
    (state) => state.survey.questions[questionIndex].required
  );

  const handleClick = () => dispatch(setQuestionRequired({ questionIndex }));

  return (
    <>
      {required && (
        <Button
          type="button"
          onClick={handleClick}
          width={30}
          height={30}
          color="black"
          bgColor="orange"
        >
          필수 아님으로 만드는 버튼
        </Button>
      )}
      {!required && (
        <Button
          type="button"
          onClick={handleClick}
          width={30}
          height={30}
          color="black"
          bgColor="orange"
        >
          필수로 만드는 버튼
        </Button>
      )}
    </>
  );
}

export default RequiredQuestionButton;
