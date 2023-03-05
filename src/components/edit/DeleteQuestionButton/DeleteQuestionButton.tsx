import Button from "../../common/Button/Button";
import { memo, useCallback } from "react";
import { useAppDispatch } from "../../../store";
import { deleteQuestion } from "../../../store/surveySlice";

interface DeleteQuestionButtonProps {
  index: number;
}

function DeleteQuestionButton({ index }: DeleteQuestionButtonProps) {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    () => dispatch(deleteQuestion({ index })),
    []
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
      삭제
    </Button>
  );
}

export default memo(DeleteQuestionButton);
