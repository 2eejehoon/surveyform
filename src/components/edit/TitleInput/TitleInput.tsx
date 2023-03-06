import { ChangeEvent, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setTitle } from "../../../store/surveySlice";
import Input from "../../common/Input/Input";

function TitleInput() {
  const title = useAppSelector((state) => state.survey.title);
  const dispatch = useAppDispatch();

  const handleTitleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(setTitle({ title: e.target.value })),
    []
  );

  return (
    <Input id="title" type="text" value={title} onChange={handleTitleChange} />
  );
}

export default TitleInput;
