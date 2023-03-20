import Button from "../../common/Button/Button";
import { useAppDispatch } from "../../../store/index";
import { copyQuestion } from "../../../store/surveySlice";

interface CopyQuestionButtonProps {
  questionIndex: number;
}

function CopyQuestionButton({ questionIndex }: CopyQuestionButtonProps) {
  const dispatch = useAppDispatch();

  const handleCopyClick = () => {
    dispatch(copyQuestion({ questionIndex }));
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
