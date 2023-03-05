import { memo, ReactNode } from "react";
import { StyledMain } from "./MainStyle";

interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {
  return <StyledMain>{children}</StyledMain>;
}

export default memo(Main);
