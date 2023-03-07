import { useCallback } from "react";
import { useAppDispatch } from "../../../store";
import Button from "../../common/Button/Button";
import { addQuestion } from "../../../store/surveySlice";

function AddQuestionButton() {
  const dispatch = useAppDispatch();

  const handleAddClick = useCallback(() => dispatch(addQuestion()), []);

  console.log("1");
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
