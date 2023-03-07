import Header from "../components/common/Layout/Header/Header";
import Main from "../components/common/Layout/Main/Main";
import Sidebar from "../components/common/Layout/Sidebar/Sidebar";
import SurveyTitleInput from "../components/edit/SurveyTitleInput/SurveyTitleInput";
import SurveyDescInput from "../components/edit/SurveyDescInput/SurveyDescInput";
import QuestionList from "../components/edit/QuestionList/QuestionList";
import AddQuestionButton from "../components/edit/AddQuestionButton/AddQuestionButton";
import PreviewButton from "../components/edit/PreviewButton/PreviewButton";

function EditPage() {
  return (
    <>
      <Header>
        <SurveyTitleInput />
        <SurveyDescInput />
      </Header>
      <Main>
        <Sidebar>
          <AddQuestionButton />
          <PreviewButton />
        </Sidebar>
        <QuestionList />
      </Main>
    </>
  );
}

export default EditPage;
