import { useNavigate } from "react-router";
import Button from "../../common/Button/Button";

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate("/");
  };
  return (
    <Button
      type="button"
      onClick={handleGoBackClick}
      width={40}
      height={40}
      fontSize={20}
      color="black"
      bgColor="white"
    >
      ←
    </Button>
  );
}

export default GoBackButton;
