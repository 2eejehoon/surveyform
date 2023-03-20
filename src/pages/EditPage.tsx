import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";
import Sidebar from "../layout/Sidebar/Sidebar";
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
        <QuestionList />
        <Sidebar>
          <AddQuestionButton />
          <PreviewButton />
        </Sidebar>
      </Main>
    </>
  );
}

export default EditPage;
