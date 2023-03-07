import { useCallback } from "react";
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
      fontSize={40}
      color="grey"
      bgColor="white"
    >
      &#128808;
    </Button>
  );
}

export default AddQuestionButton;
