import { memo } from "react";
import Footer from "../components/common/Layout/Footer";
import Header from "../components/common/Layout/Header";
import Main from "../components/common/Layout/Main";
import Sidebar from "../components/common/Layout/Sidebar";

function PreviewPage() {
  return (
    <>
      <Header>1</Header>
      <Main>
        <Sidebar>1</Sidebar>
      </Main>
      <Footer>1</Footer>
    </>
  );
}

export default memo(PreviewPage);
