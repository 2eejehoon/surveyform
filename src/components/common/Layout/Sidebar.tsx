import { memo, ReactNode } from "react";
import { StyledSidebar } from "./SidebarStyle";

interface SidebarProps {
  children: ReactNode;
}

function Sidebar({ children }: SidebarProps) {
  return <StyledSidebar>{children}</StyledSidebar>;
}

export default memo(Sidebar);
