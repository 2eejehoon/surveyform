import { ChangeEventHandler, FocusEvent } from "react";
import { StyledInput } from "./InputStyle";

interface InputProps {
  id: string;
  type: string;
  value?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
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
  onBlur,
}: InputProps) {
  return (
    <StyledInput
      id={id}
      type={type}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      autoComplete={"off"}
      fontSize={fontSize}
      placeholder={placeholder}
      borderBottom={borderBottom}
    />
  );
}

export default Input;
