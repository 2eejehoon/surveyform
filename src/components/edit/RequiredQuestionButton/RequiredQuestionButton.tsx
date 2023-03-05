import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionRequired } from "../../../store/surveySlice";
import Button from "../../common/Button/Button";

interface RequiredQuestionButtonProps {
  index: number;
}

function RequiredQuestionButton({ index }: RequiredQuestionButtonProps) {
  const required = useAppSelector(
    (state) => state.survey.questions[index].required
  );

  const dispatch = useAppDispatch();

  const handleClick = useCallback(
    () => dispatch(setQuestionRequired({ index, required })),
    [index, required]
  );

  return (
    <>
      {required && (
        <Button
          type="button"
          onClick={handleClick}
          width={30}
          height={30}
          color="black"
          bgColor="orange"
        >
          필수 아님으로 만드는 버튼
        </Button>
      )}
      {!required && (
        <Button
          type="button"
          onClick={handleClick}
          width={30}
          height={30}
          color="black"
          bgColor="orange"
        >
          필수로 만드는 버튼
        </Button>
      )}
    </>
  );
}

export default memo(RequiredQuestionButton);
