import Button from "../../common/Button/Button";

function SubmitButton() {
  return (
    <Button
      type="submit"
      onClick={() => console.log()}
      width={50}
      height={30}
      fontSize={16}
      color="black"
      bgColor="purple"
    >
      제출
    </Button>
  );
}

export default SubmitButton;
