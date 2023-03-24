import { memo } from "react";
import { useAppDispatch } from "../../../store";
import Button from "../../common/Button/Button";
import { deleteQuestionOption } from "../../../store/surveySlice";

interface DeleteOptionButtonProps {
  questionIndex: number;
  optionIndex: number;
}

function DeleteOptionButton({ questionIndex, optionIndex }: DeleteOptionButtonProps) {
  const dispatch = useAppDispatch();

  const handleDeleteClick = () =>
    dispatch(deleteQuestionOption({ questionIndex, optionIndex }));

  return (
    <Button
      type={"button"}
      onClick={handleDeleteClick}
      width={30}
      height={30}
      fontSize={18}
      color={"black"}
      bgColor={"white"}
    >
      X
    </Button>
  );
}

export default memo(DeleteOptionButton);
