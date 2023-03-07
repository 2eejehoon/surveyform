import { ChangeEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTitle } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";

function SurveyTitleInput() {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.survey.title);

  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(setTitle({ title: e.target.value })),
    []
  );

  return (
    <Input id="title" type="text" value={title} onChange={handleTitleChange} />
  );
}

export default SurveyTitleInput;
