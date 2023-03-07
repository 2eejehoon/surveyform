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
      width={50}
      height={30}
      color="black"
      bgColor="purple"
    >
      양식 지우기
    </Button>
  );
}

export default ClearButton;
