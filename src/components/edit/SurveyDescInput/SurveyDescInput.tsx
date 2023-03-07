import { ChangeEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setDesc } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";

function SurveyDescInput() {
  const dispatch = useAppDispatch();
  const desc = useAppSelector((state) => state.survey.desc);

  const handleDescChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(setDesc({ desc: e.target.value })),
    []
  );

  return (
    <Input
      id="description"
      type="text"
      value={desc}
      onChange={handleDescChange}
      fontSize={16}
      placeholder="설문지 설명"
    />
  );
}

export default SurveyDescInput;
