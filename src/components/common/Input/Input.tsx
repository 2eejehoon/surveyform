import { ChangeEventHandler } from "react";
import { StyledInput } from "./InputStyle";

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  fontSize?: number;
  placeholder?: string;
  borderBottom?: boolean;
}

function Input({
  id,
  type,
  value,
  onChange,
  fontSize,
  placeholder,
  borderBottom,
}: InputProps) {
  return (
    <StyledInput
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete="off"
      fontSize={fontSize}
      placeholder={placeholder}
      borderBottom={borderBottom}
    />
  );
}

export default Input;
