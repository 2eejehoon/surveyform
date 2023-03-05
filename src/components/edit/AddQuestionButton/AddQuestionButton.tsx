import { memo, useCallback } from "react";
import { useAppDispatch } from "../../../store";
import Button from "../../common/Button/Button";
import { addQuestion } from "../../../store/surveySlice";

function AddQuestionButton() {
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => dispatch(addQuestion()), []);

  return (
    <Button
      type="button"
      onClick={handleClick}
      width={30}
      height={30}
      color="black"
      bgColor="orange"
    >
      추가
    </Button>
  );
}

export default memo(AddQuestionButton);
