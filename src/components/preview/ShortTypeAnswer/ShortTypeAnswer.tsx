import Input from "../../common/Input/Input";

interface ShortTypeAnswerProps {
  questionIndex: number;
}

function ShortTypeAnswer({ questionIndex }: ShortTypeAnswerProps) {
  return (
    <Input
      id="short-answer"
      type="text"
      value={"단답형"}
      onChange={() => console.log(questionIndex)}
    />
  );
}

export default ShortTypeAnswer;
