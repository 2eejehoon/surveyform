import { useAppDispatch } from "../../../store";
import { clearAnswer } from "../../../store/surveySlice";
import Button from "../../common/Button/Button";

function ClearButton() {
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(clearAnswer());

  return (
    <Button
      type="button"
      onClick={handleClick}
      width={70}
      height={30}
      fontSize={14}
      color="purple"
      bgColor="lavender"
    >
      양식 지우기
    </Button>
  );
}

export default ClearButton;
