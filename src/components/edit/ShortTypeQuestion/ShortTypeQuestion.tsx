import { ChangeEvent, memo, useCallback } from "react";
import { QUESTION_TYPE } from "../../../constant";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionData } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";

interface ShortTypeQuestionProps {
  index: number;
}

function ShortTypeQuestion({ index }: ShortTypeQuestionProps) {
  const data = useAppSelector(
    (state) => state.survey.questions[index].data
  ) as string;

  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(
        setQuestionData({
          index,
          type: QUESTION_TYPE.SHORT,
          data: e.target.value,
        })
      ),
    []
  );

  return (
    <Input id="short-answer" type="text" value={data} onChange={handleChange} />
  );
}

export default memo(ShortTypeQuestion);
