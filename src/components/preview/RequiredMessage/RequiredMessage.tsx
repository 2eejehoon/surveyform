import { StyledP } from "./RequiredMessageStyle";

interface RequiredMessageProps {
  isAnswered: boolean;
}

export default function RequiredMessage({ isAnswered }: RequiredMessageProps) {
  return <StyledP>{isAnswered ? "" : "필수 질문입니다."}</StyledP>;
}
