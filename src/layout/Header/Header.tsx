import { ReactNode } from "react";
import { StyledHeader } from "./HeaderStyle";

interface HeaderProps {
  children: ReactNode;
}

function Header({ children }: HeaderProps) {
  return <StyledHeader>{children}</StyledHeader>;
}

export default Header;
