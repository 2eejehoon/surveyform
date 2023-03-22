import { memo, useCallback, useState, MutableRefObject } from "react";
import { useAppSelector } from "../../../store";
import CopyQuestionButton from "../CopyQuestionButton/CopyQuestionButton";
import DeleteQuestionButton from "../DeleteQuestionButton/DeleteQuestionButton";
import QuestionRenderer from "../QuestionRenderer/QuestionRenderer";
import QuestionTitleInput from "../QuestionTitleInput/QuestionTitleInput";
import QuestionTypeSelect from "../QuestionTypeSelect/QuestionTypeSelect";
import RequiredQuestionToggle from "../RequiredQuestionButton/RequiredQuestionToggle";
import {
  QuestionBody,
  QuestionFooter,
  QuestionHeader,
  Wrapper,
  DragButton,
} from "./QuestionStyle";
import { useAppDispatch } from "../../../store";
import { questionDragAndDrop } from "../../../store/surveySlice";
import useDragAndDrop from "../../../hooks/useDragAndDrop";

interface QuestionProps {
  questionIndex: number;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
}

function Question({ questionIndex, dragStartRef, dragEndRef }: QuestionProps) {
  const [isDraggable, setIsDraggable] = useState(false);
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.survey.questions[questionIndex].type);

  const handleMouseEnter = useCallback(() => setIsDraggable(true), []);
  const handleMouseLeave = useCallback(() => setIsDraggable(false), []);

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
    <Wrapper
      draggable={isDraggable}
      onDragStart={() => handleDragStart(questionIndex)}
      onDragEnter={() => handleDragEnter(questionIndex)}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <DragButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        &#58;
      </DragButton>
      <QuestionHeader>
        <QuestionTitleInput questionIndex={questionIndex} />
        <QuestionTypeSelect questionIndex={questionIndex} />
      </QuestionHeader>
      <QuestionBody>
        <QuestionRenderer type={type} questionIndex={questionIndex} />
      </QuestionBody>
      <QuestionFooter>
        <CopyQuestionButton questionIndex={questionIndex} />
        <DeleteQuestionButton questionIndex={questionIndex} />
        <RequiredQuestionToggle questionIndex={questionIndex} />
      </QuestionFooter>
    </Wrapper>
  );
}

export default memo(Question);
