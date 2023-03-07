import Footer from "../components/common/Layout/Footer/Footer";
import Header from "../components/common/Layout/Header/Header";
import Main from "../components/common/Layout/Main/Main";
import Sidebar from "../components/common/Layout/Sidebar/Sidebar";
import AnswerList from "../components/preview/AnswerList/AnswerList";
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
        <Sidebar>1</Sidebar>
        <AnswerList />
      </Main>
      <Footer>1</Footer>
    </>
  );
}

export default PreviewPage;
