import { ReactNode } from "react";
import { MutableRefObject } from "react";
import { useAppDispatch } from "../../../store";
import { questionOptionDragAndDrop } from "../../../store/surveySlice";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import { StyledLi, DragButton } from "./OptionContainerStyle";
import useHover from "../../../hooks/useHover";
import DeleteOptionButton from "../DeleteOptionButton/DeleteOptionButton";

interface OptionContainerProps {
  children: ReactNode;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
  questionIndex: number;
  optionIndex: number;
}

function OptionContainer({ children, dragStartRef, dragEndRef, questionIndex, optionIndex }: OptionContainerProps) {
  const [isOptionHover, handleMouseEnterOption, handleMouseLeaveOption] = useHover();
  const [isButtonHover, handleMouseEnterButton, handleMouseLeaveButton] = useHover();

  const dispatch = useAppDispatch();

  const dispatchQuestionOptionDragAndDrop = () => {
    dispatch(
      questionOptionDragAndDrop({
        questionIndex,
        dragStartIndex: dragStartRef.current!,
        dragEndIndex: dragEndRef.current!,
      })
    );
  };

  const [handleDragStart, handleDragEnter, handleDragOver, handleDragEnd] = useDragAndDrop(
    dragStartRef,
    dragEndRef,
    dispatchQuestionOptionDragAndDrop
  );

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
        <DragButton onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton}>
          &#58;
        </DragButton>
      )}
      {children}
      {isOptionHover && <DeleteOptionButton questionIndex={questionIndex} optionIndex={optionIndex} />}
    </StyledLi>
  );
}

export default OptionContainer;
