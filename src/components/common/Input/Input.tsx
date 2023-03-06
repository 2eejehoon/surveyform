import { ChangeEventHandler } from "react";
import { StyledInput } from "./InputStyle";

interface InputProps {
  id: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function Input({ id, type, value, onChange }: InputProps) {
  return (
    <StyledInput
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  );
}

export default Input;
