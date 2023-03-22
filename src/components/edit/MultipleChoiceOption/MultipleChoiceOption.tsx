import { StyledLi, DragButton } from "./MultipleChoiceOptionStyle";
import { ChangeEvent, memo, MutableRefObject, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import {
  questionOptionDragAndDrop,
  setQuestionOptionText,
} from "../../../store/surveySlice";
import Input from "../../common/Input/Input";
import DeleteOptionButton from "../DeleteOptionButton/DeleteOptionButton";
import useDragAndDrop from "../../../hooks/useDragAndDrop";

interface MultipleChoiceOptionProps {
  questionIndex: number;
  optionIndex: number;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
}

function MultipleChoiceOption({
  questionIndex,
  optionIndex,
  dragStartRef,
  dragEndRef,
}: MultipleChoiceOptionProps) {
  const dispatch = useAppDispatch();
  const [hover, setHover] = useState(false);
  const [isDraggable, setIsDraggable] = useState(false);
  const option = useAppSelector(
    (state) => state.survey.questions[questionIndex].options![optionIndex]
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setQuestionOptionText({
        questionIndex,
        optionIndex,
        text: e.target.value,
      })
    );
  };

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
        id={`multiple-${questionIndex}-${optionIndex}`}
        type={"text"}
        value={option}
        onChange={handleChange}
        fontSize={14}
      />
      <DeleteOptionButton questionIndex={questionIndex} optionIndex={optionIndex} />
    </StyledLi>
  );
}

export default memo(MultipleChoiceOption);
