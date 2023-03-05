import { ChangeEventHandler, memo } from "react";
import { StyledInput } from "./InputStyle";

interface InputProps {
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  width: number;
  height: number;
}

function Input({ type, value, onChange, width, height }: InputProps) {
  return (
    <StyledInput
      type={type}
      value={value}
      onChange={onChange}
      width={width}
      height={height}
    />
  );
}

export default memo(Input);
