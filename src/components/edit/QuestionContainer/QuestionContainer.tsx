import { ReactNode, MutableRefObject } from "react";
import { useAppDispatch } from "../../../store";
import { questionDragAndDrop } from "../../../store/surveySlice";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import { StyledLi, DragButton } from "./QuestionContainerStyle";
import useHover from "../../../hooks/useHover";

interface QuestionContainerProps {
  children: ReactNode;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
  questionIndex: number;
}

function QuestionContainer({
  children,
  dragStartRef,
  dragEndRef,
  questionIndex,
}: QuestionContainerProps) {
  const [isQuestionHover, handleMouseEnterQuestion, handleMouseLeaveQuestion] =
    useHover();
  const [isButtonHover, handleMouseEnterButton, handleMouseLeaveButton] = useHover();

  const dispatch = useAppDispatch();

  // 드래그 중인 질문의 index와 옮겨질 위치의 index 전달
  const dispatchQuestionDragAndDrop = () => {
    dispatch(
      questionDragAndDrop({
        dragStartIndex: dragStartRef.current!,
        dragEndIndex: dragEndRef.current!,
      })
    );
  };

  // useDragAndDrop 훅에 ref 객체와 함수를 인자로 전달
  const [handleDragStart, handleDragEnter, handleDragOver, handleDragEnd] =
    useDragAndDrop(dragStartRef, dragEndRef, dispatchQuestionDragAndDrop);

  return (
    <StyledLi
      draggable={isButtonHover}
      onDragStart={() => handleDragStart(questionIndex)}
      onDragEnter={() => handleDragEnter(questionIndex)}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onMouseEnter={handleMouseEnterQuestion}
      onMouseLeave={handleMouseLeaveQuestion}
    >
      {isQuestionHover && (
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

export default QuestionContainer;
