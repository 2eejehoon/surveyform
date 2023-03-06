import Button from "../../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { copyQuestion } from "../../../store/surveySlice";

interface CopyQuestionButtonProps {
  questionIndex: number;
}

function CopyQuestionButton({ questionIndex }: CopyQuestionButtonProps) {
  const dispatch = useAppDispatch();
  const { title, type, required, text, options } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
  );

  const handleClick = () =>
    dispatch(
      copyQuestion({ questionIndex, title, type, required, text, options })
    );

  return (
    <Button
      type="button"
      onClick={handleClick}
      width={30}
      height={30}
      color="black"
      bgColor="orange"
    >
      복사
    </Button>
  );
}

export default CopyQuestionButton;
