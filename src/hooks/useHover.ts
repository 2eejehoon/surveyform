import { useState, useCallback } from "react";

type useHoverReturnType = [
  isHover: boolean,
  handleMouseEnter: () => void,
  handleMouseLeave: () => void
];

export default function useHover(): useHoverReturnType {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => setIsHover(false), []);

  return [isHover, handleMouseEnter, handleMouseLeave];
}
