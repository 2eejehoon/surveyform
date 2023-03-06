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
      width={30}
      height={30}
      color="black"
      bgColor="orange"
    >
      삭제
    </Button>
  );
}

export default DeleteQuestionButton;
