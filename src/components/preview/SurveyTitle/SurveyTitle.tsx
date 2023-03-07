import { StyledTitle } from "./SurveyTitleStyle";
import { useAppSelector } from "../../../store/index";

function SurveyTitle() {
  const title = useAppSelector((state) => state.survey.title);
  return <StyledTitle>{title}</StyledTitle>;
}

export default SurveyTitle;
