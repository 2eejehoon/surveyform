import { ChangeEvent, memo, useCallback } from "react";
import { QUESTION_TYPE } from "../../../constant";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionData } from "../../../store/surveySlice";
import { StyledTextarea } from "./LongTypeQuestionStyle";

interface LongTypeQuestionProps {
  index: number;
}

function LongTypeQuestion({ index }: LongTypeQuestionProps) {
  const data = useAppSelector(
    (state) => state.survey.questions[index].data
  ) as string;

  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) =>
      dispatch(
        setQuestionData({
          index,
          type: QUESTION_TYPE.LONG,
          data: e.target.value,
        })
      ),
    []
  );
  return <StyledTextarea value={data} onChange={handleChange} />;
}
export default memo(LongTypeQuestion);
