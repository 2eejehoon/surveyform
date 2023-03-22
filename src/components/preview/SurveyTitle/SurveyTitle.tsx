import { StyledTitle } from "./SurveyTitleStyle";
import { useAppSelector } from "../../../store/index";

function SurveyTitle() {
  const surveyTitle = useAppSelector((state) => state.survey.surveyTitle);

  return <StyledTitle>{surveyTitle}</StyledTitle>;
}

export default SurveyTitle;
