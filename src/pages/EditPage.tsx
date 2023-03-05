import { memo } from "react";
import Header from "../components/common/Layout/Header";
import Main from "../components/common/Layout/Main";
import Sidebar from "../components/common/Layout/Sidebar";

function EditPage() {
  return (
    <>
      <Header>1</Header>
      <Main>
        <Sidebar>1</Sidebar>
      </Main>
    </>
  );
}

export default memo(EditPage);
