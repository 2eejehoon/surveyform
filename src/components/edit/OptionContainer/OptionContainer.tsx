import { ReactNode } from "react";
import { MutableRefObject, useState, useCallback } from "react";
import { useAppDispatch } from "../../../store";
import { questionOptionDragAndDrop } from "../../../store/surveySlice";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import { StyledLi, DragButton } from "./OptionContainerStyle";

interface OptionContainerProps {
  children: ReactNode;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
  questionIndex: number;
  optionIndex: number;
}

function OptionContainer({
  children,
  dragStartRef,
  dragEndRef,
  questionIndex,
  optionIndex,
}: OptionContainerProps) {
  const [isOptionHover, setIsOptionHover] = useState(false);
  const [isButtonHover, setIsButtonHover] = useState(false);

  const dispatch = useAppDispatch();

  const handleMouseEnterOption = useCallback(() => setIsOptionHover(true), []);
  const handleMouseLeaveOption = useCallback(() => setIsOptionHover(false), []);

  const handleMouseEnterButton = useCallback(() => setIsButtonHover(true), []);
  const handleMouseLeaveButton = useCallback(() => setIsButtonHover(false), []);

  const dispatchQuestionOptionDragAndDrop = () => {
    dispatch(
      questionOptionDragAndDrop({
        questionIndex,
        dragStartIndex: dragStartRef.current!,
        dragEndIndex: dragEndRef.current!,
      })
    );
  };

  const [handleDragStart, handleDragEnter, handleDragOver, handleDragEnd] =
    useDragAndDrop(dragStartRef, dragEndRef, dispatchQuestionOptionDragAndDrop);
  return (
    <StyledLi
      draggable={isButtonHover}
      onDragStart={() => handleDragStart(optionIndex)}
      onDragEnter={() => handleDragEnter(optionIndex)}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onMouseEnter={handleMouseEnterOption}
      onMouseLeave={handleMouseLeaveOption}
    >
      {isOptionHover && (
        <DragButton
          onMouseEnter={handleMouseEnterButton}
          onMouseLeave={handleMouseLeaveButton}
        >
          &#58;
        </DragButton>
      )}
      {children}
    </StyledLi>
  );
}

export default OptionContainer;
