import Footer from "../components/common/Layout/Footer/Footer";
import Header from "../components/common/Layout/Header/Header";
import Main from "../components/common/Layout/Main/Main";
import Sidebar from "../components/common/Layout/Sidebar/Sidebar";
import AnswerList from "../components/preview/AnswerList/AnswerList";
import ClearButton from "../components/preview/ClearButton/ClearButton";
import GoBackButton from "../components/preview/GoBackButton/GoBackButton";
import SubmitButton from "../components/preview/SubmitButton/SubmitButton";
import SurveyDesc from "../components/preview/SurveyDesc/SurveyDesc";
import SurveyTitle from "../components/preview/SurveyTitle/SurveyTitle";

function PreviewPage() {
  return (
    <>
      <Header>
        <SurveyTitle />
        <SurveyDesc />
      </Header>
      <Main>
        <AnswerList />
        <Sidebar>
          <GoBackButton />
        </Sidebar>
      </Main>
      <Footer>
        <SubmitButton />
        <ClearButton />
      </Footer>
    </>
  );
}

export default PreviewPage;
