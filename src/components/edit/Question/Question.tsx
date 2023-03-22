import { memo, useCallback, useState, MutableRefObject } from "react";
import { useAppSelector } from "../../../store";
import CopyQuestionButton from "../CopyQuestionButton/CopyQuestionButton";
import DeleteQuestionButton from "../DeleteQuestionButton/DeleteQuestionButton";
import QuestionRenderer from "../QuestionRenderer/QuestionRenderer";
import QuestionTitleInput from "../QuestionTitleInput/QuestionTitleInput";
import QuestionTypeSelect from "../QuestionTypeSelect/QuestionTypeSelect";
import RequiredQuestionToggle from "../RequiredQuestionButton/RequiredQuestionToggle";
import { QuestionBody, QuestionFooter, QuestionHeader, Wrapper, DragButton } from "./QuestionStyle";
import { useAppDispatch } from "../../../store";
import { questionDragDrop } from "../../../store/surveySlice";
import useDragAndDrop from "../../../hooks/useDragAndDrop";

interface QuestionProps {
  questionIndex: number;
  dragStartRef: MutableRefObject<number | null>;
  dragEndRef: MutableRefObject<number | null>;
}

function Question({ questionIndex, dragStartRef, dragEndRef }: QuestionProps) {
  const [hover, setHover] = useState(false);
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.survey.questions[questionIndex].type);

  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);

  // drag 중인 질문의 index와 옮겨질 위치의 index 전달
  const dispatchQuestionDragDrop = () => {
    dispatch(
      questionDragDrop({ dragStartIndex: dragStartRef.current!, dragEndIndex: dragEndRef.current! })
    );
  };

  const [handleDragStart, handleDragEnter, handleDragOver, handleDragEnd] = useDragAndDrop(
    dragStartRef,
    dragEndRef,
    dispatchQuestionDragDrop
  );

  return (
    <Wrapper
      draggable={hover}
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
