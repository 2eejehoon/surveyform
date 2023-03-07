import { StyledTextarea } from "./LongTypeAnswerStyle";

interface LongTypeAnswerProps {
  questionIndex: number;
}

function LongTypeAnswer({ questionIndex }: LongTypeAnswerProps) {
  return (
    <StyledTextarea
      value={"장문형"}
      onChange={() => console.log(questionIndex)}
    />
  );
}

export default LongTypeAnswer;
