import { useCallback } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../../store";
import { clearAnswer } from "../../../store/surveySlice";
import Button from "../../common/Button/Button";

function PreviewButton() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlePreviewClick = useCallback(() => {
    // 미리보기 할 때 마다 이전에 작성된 답변을 초기화
    dispatch(clearAnswer());
    navigate("/preview");
  }, []);

  return (
    <Button
      type={"button"}
      onClick={handlePreviewClick}
      width={40}
      height={40}
      fontSize={20}
      color={"black"}
      bgColor={"white"}
    >
      👁️‍🗨️
    </Button>
  );
}

export default PreviewButton;
