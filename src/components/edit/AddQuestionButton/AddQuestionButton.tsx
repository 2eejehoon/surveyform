import { useCallback } from "react";
import { useAppDispatch } from "../../../store";
import { addQuestion } from "../../../store/surveySlice";
import Button from "../../common/Button/Button";

function AddQuestionButton() {
  const dispatch = useAppDispatch();

  const handleAddClick = useCallback(() => dispatch(addQuestion()), []);

  return (
    <Button
      type="button"
      onClick={handleAddClick}
      width={30}
      height={30}
      fontSize={40}
      color="black"
      bgColor="white"
    >
      &#128808;
    </Button>
  );
}

export default AddQuestionButton;
