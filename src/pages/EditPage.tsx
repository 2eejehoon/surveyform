import { memo } from "react";
import Header from "../components/common/Layout/Header/Header";
import Main from "../components/common/Layout/Main/Main";
import Sidebar from "../components/common/Layout/Sidebar/Sidebar";
import TitleInput from "../components/edit/TitleInput/TitleInput";
import DescInput from "../components/edit/DescInput/DescInput";
import QuestionList from "../components/edit/QuestionList/QuestionList";
import AddQuestionButton from "../components/edit/AddQuestionButton/AddQuestionButton";

function EditPage() {
  return (
    <>
      <Header>
        <TitleInput />
        <DescInput />
      </Header>
      <Main>
        <Sidebar>
          <AddQuestionButton />
        </Sidebar>
        <QuestionList />
      </Main>
    </>
  );
}

export default memo(EditPage);
