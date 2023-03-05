import { memo, MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./ButtonStyle";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick: MouseEventHandler<HTMLButtonElement>;
  width: number;
  height: number;
  color: string;
  bgColor: string;
}

function Button({
  children,
  type,
  onClick,
  width,
  height,
  color,
  bgColor,
}: ButtonProps) {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
    >
      {children}
    </StyledButton>
  );
}

export default memo(Button);
