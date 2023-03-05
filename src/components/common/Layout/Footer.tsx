import { memo, ReactNode } from "react";
import { StyledFooter } from "./FooterStyle";

interface FooterProps {
  children: ReactNode;
}

function Footer({ children }: FooterProps) {
  return <StyledFooter>{children}</StyledFooter>;
}

export default memo(Footer);
