import { useAppDispatch } from "../../../store";
import Button from "../../common/Button/Button";
import { addQuestionOption } from "../../../store/surveySlice";
import { memo } from "react";

interface AddOptionButtonProps {
  questionIndex: number;
}

function AddOptionButton({ questionIndex }: AddOptionButtonProps) {
  const dispatch = useAppDispatch();

  const handleOptionAddClick = () => {
    dispatch(addQuestionOption({ questionIndex }));
  };

  return (
    <Button
      type={"button"}
      onClick={handleOptionAddClick}
      width={60}
      height={30}
      fontSize={14}
      color={"grey"}
      bgColor={"white"}
    >
      옵션 추가
    </Button>
  );
}

export default memo(AddOptionButton);
