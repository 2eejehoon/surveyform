import { memo, useCallback } from "react";
import Button from "../../common/Button/Button";
import { useAppDispatch, useAppSelector } from "../../../store/index";
import { copyQuestion } from "../../../store/surveySlice";

interface CopyQuestionButtonProps {
  index: number;
}

function CopyQuestionButton({ index }: CopyQuestionButtonProps) {
  const title = useAppSelector((state) => state.survey.questions[index].title);
  const type = useAppSelector((state) => state.survey.questions[index].type);
  const data = useAppSelector((state) => state.survey.questions[index].data);
  const required = useAppSelector(
    (state) => state.survey.questions[index].required
  );

  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    () => dispatch(copyQuestion({ index, title, type, required, data })),
    [index, title, type, required, data]
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
      복사
    </Button>
  );
}

export default memo(CopyQuestionButton);
