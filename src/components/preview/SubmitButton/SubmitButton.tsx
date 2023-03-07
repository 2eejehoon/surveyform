import { useAppSelector } from "../../../store";
import Button from "../../common/Button/Button";

function SubmitButton() {
  const questions = useAppSelector((state) => state.survey.questions);

  return (
    <Button
      type="submit"
      onClick={() => console.log(questions)}
      width={50}
      height={30}
      color="black"
      bgColor="purple"
    >
      제출
    </Button>
  );
}

export default SubmitButton;
