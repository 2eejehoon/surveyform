import Button from "../../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { copyQuestion } from "../../../store/surveySlice";

interface CopyQuestionButtonProps {
  questionIndex: number;
}

function CopyQuestionButton({ questionIndex }: CopyQuestionButtonProps) {
  const dispatch = useAppDispatch();
  const { questionTitle, type, required, text, options } = useAppSelector(
    (state) => state.survey.questions[questionIndex]
  );

  const handleCopyClick = () => {
    dispatch(
      copyQuestion({ questionIndex, questionTitle, type, required, text, options })
    );
  };

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
