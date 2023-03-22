import Input from "../../common/Input/Input";
import { StyledLi, DragButton } from "./DropdownOptionStyle";
import { useAppDispatch, useAppSelector } from "../../../store";
import { setQuestionOptionText } from "../../../store/surveySlice";
import { ChangeEvent, memo, MutableRefObject, useState, useCallback } from "react";
import DeleteOptionButton from "../DeleteOptionButton/DeleteOptionButton";
import { questionOptionDragAndDrop } from "../../../store/surveySlice";
import useDragAndDrop from "../../../hooks/useDragAndDrop";

interface DropdownOptionProps {
  questionIndex: number;
  optionIndex: number;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
}

function DropdownOption({
  questionIndex,
  optionIndex,
  dragStartRef,
  dragEndRef,
}: DropdownOptionProps) {
  const [hover, setHover] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);

  const dispatch = useAppDispatch();
  const option = useAppSelector(
    (state) => state.survey.questions[questionIndex].options![optionIndex]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      setQuestionOptionText({
        questionIndex,
        optionIndex,
        text: e.target.value,
      })
    );

  const handleOptionMouseEnter = useCallback(() => setHover(true), []);
  const handleOptionMouseLeave = useCallback(() => setHover(false), []);

  const handleButtonMouseEnter = useCallback(() => setIsDraggable(true), []);
  const handleButtonMouseLeave = useCallback(() => setIsDraggable(false), []);

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
      draggable={isDraggable}
      onDragStart={() => handleDragStart(optionIndex)}
      onDragEnter={() => handleDragEnter(optionIndex)}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onMouseEnter={handleOptionMouseEnter}
      onMouseLeave={handleOptionMouseLeave}
    >
      {hover && (
        <DragButton
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          &#58;
        </DragButton>
      )}
      <Input
        id={`dropdown-${questionIndex}-${optionIndex}`}
        type={"text"}
        value={option}
        onChange={handleChange}
        fontSize={14}
      />
      <DeleteOptionButton questionIndex={questionIndex} optionIndex={optionIndex} />
    </StyledLi>
  );
}

export default memo(DropdownOption);
