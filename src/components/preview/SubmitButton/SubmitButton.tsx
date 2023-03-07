import Button from "../../common/Button/Button";

function SubmitButton() {
  return (
    <Button
      type="submit"
      onClick={() => console.log()}
      width={60}
      height={40}
      fontSize={16}
      color="white"
      bgColor="purple"
    >
      제출
    </Button>
  );
}

export default SubmitButton;
