import { MutableRefObject, useCallback, DragEvent } from "react";

type useDragDropReturnType = [
  handleDragStart: (index: number) => void,
  handleDragEnter: (index: number) => void,
  handleDragOver: (e: DragEvent) => void,
  handleDragEnd: () => void
];

export default function useDragAndDrop(
  dragStartRef: MutableRefObject<number | null>,
  dragEndRef: MutableRefObject<number | null>,
  onDragEndFunc: () => void
): useDragDropReturnType {
  const handleDragStart = useCallback((questionIndex: number) => {
    dragStartRef.current = questionIndex;
  }, []);

  const handleDragEnter = useCallback((questionIndex: number) => {
    dragEndRef.current = questionIndex;
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragEnd = () => {
    onDragEndFunc();
    dragStartRef.current = null;
    dragEndRef.current = null;
  };

  return [handleDragStart, handleDragEnter, handleDragOver, handleDragEnd];
}
