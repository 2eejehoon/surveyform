import { StyledP } from "./SurveyDescStyle";
import { useAppSelector } from "../../../store/index";

function SurveyDesc() {
  const desc = useAppSelector((state) => state.survey.desc);

  return <StyledP>{desc}</StyledP>;
}

export default SurveyDesc;
