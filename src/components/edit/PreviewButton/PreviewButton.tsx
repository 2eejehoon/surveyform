import { useCallback } from "react";
import { useNavigate } from "react-router";
import Button from "../../common/Button/Button";

function PreviewButton() {
  const navigate = useNavigate();

  const handlePreviewClick = useCallback(() => {
    navigate("/preview");
  }, []);

  return (
    <Button
      type="button"
      onClick={handlePreviewClick}
      width={40}
      height={40}
      fontSize={20}
      color="black"
      bgColor="white"
    >
      👁️‍🗨️
    </Button>
  );
}

export default PreviewButton;
