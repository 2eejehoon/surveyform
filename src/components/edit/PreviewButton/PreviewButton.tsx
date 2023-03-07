import { useCallback } from "react";
import { useNavigate } from "react-router";
import Button from "../../common/Button/Button";

function PreviewButton() {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/preview");
  }, []);

  return (
    <Button
      type="button"
      onClick={handleClick}
      width={50}
      height={50}
      color="black"
      bgColor="orange"
    >
      미리보기
    </Button>
  );
}

export default PreviewButton;
