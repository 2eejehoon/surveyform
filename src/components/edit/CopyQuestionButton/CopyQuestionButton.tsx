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

  const handleCopyClick = () =>
    dispatch(
      copyQuestion({ questionIndex, title, type, required, text, options })
    );

  console.log("1");
  return (
    <Button
      type="button"
      onClick={handleCopyClick}
      width={50}
      height={30}
      fontSize={14}
      color="black"
      bgColor="white"
    >
      복사
    </Button>
  );
}

export default CopyQuestionButton;
