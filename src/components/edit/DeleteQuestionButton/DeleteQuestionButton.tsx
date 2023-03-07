import Button from "../../common/Button/Button";
import { useAppDispatch } from "../../../store";
import { deleteQuestion } from "../../../store/surveySlice";

interface DeleteQuestionButtonProps {
  questionIndex: number;
}

function DeleteQuestionButton({ questionIndex }: DeleteQuestionButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(deleteQuestion({ questionIndex }));

  return (
    <Button
      type="button"
      onClick={handleClick}
      width={50}
      height={30}
      fontSize={14}
      color="black"
      bgColor="white"
    >
      삭제
    </Button>
  );
}

export default DeleteQuestionButton;
