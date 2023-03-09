import { ChangeEventHandler, FocusEvent } from "react";
import { StyledInput } from "./InputStyle";

interface InputProps {
  id: string;
  type: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  fontSize?: number;
  placeholder?: string;
  borderBottom?: boolean;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

function Input({
  id,
  type,
  value,
  onChange,
  fontSize,
  placeholder,
  borderBottom,
  onBlur,
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
      onBlur={onBlur}
    />
  );
}

export default Input;
