import { ChangeEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTitle } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";

function SurveyTitleInput() {
  const dispatch = useAppDispatch();
  const surveyTitle = useAppSelector((state) => state.survey.surveyTitle);

  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(setTitle({ surveyTitle: e.target.value })),
    []
  );

  return (
    <Input
      id={"title"}
      type={"text"}
      value={surveyTitle}
      onChange={handleTitleChange}
      fontSize={24}
      placeholder={"설문지 제목"}
    />
  );
}

export default SurveyTitleInput;
