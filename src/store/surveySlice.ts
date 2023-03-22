import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QUESTION_TYPE } from "../constant";
import { Question } from "../type";

export interface surveyState {
  surveyTitle: string;
  desc: string;
  questions: Question[];
}

const initialState: surveyState = {
  surveyTitle: "제목 없는 설문지",
  desc: "",
  questions: [
    {
      questionTitle: "제목 없는 질문",
      type: QUESTION_TYPE.MULTIPLECHOICE,
      required: true,
      options: ["옵션1"],
    },
  ],
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    // 설문지의 제목 업데이트
    setTitle(state, action: PayloadAction<{ surveyTitle: string }>) {
      state.surveyTitle = action.payload.surveyTitle;
    },

    // 설문지의 설명 업데이트
    setDesc(state, action: PayloadAction<{ desc: string }>) {
      state.desc = action.payload.desc;
    },

    // 질문의 제목 업데이트
    setQuestionTitle(
      state,
      action: PayloadAction<{ questionIndex: number; questionTitle: string }>
    ) {
      state.questions[action.payload.questionIndex].questionTitle = action.payload.questionTitle;
    },

    // 질문의 유형 업데이트
    setQuestionType(state, action: PayloadAction<{ questionIndex: number; type: string }>) {
      const { questionIndex, type } = action.payload;
      state.questions[action.payload.questionIndex].type = type;

      // 질문 유형에 따라 초깃값 설정
      switch (type) {
        case QUESTION_TYPE.SHORT:
          state.questions[questionIndex].text = "단답형 텍스트";
          return;

        case QUESTION_TYPE.LONG:
          state.questions[questionIndex].text = "장문형 텍스트";
          return;

        case QUESTION_TYPE.MULTIPLECHOICE:
          state.questions[questionIndex].options = ["옵션1"];
          return;

        case QUESTION_TYPE.CHECKBOX:
          state.questions[questionIndex].options = ["옵션1"];
          return;

        case QUESTION_TYPE.DROPDOWN:
          state.questions[questionIndex].options = ["옵션1"];
          return;
      }
    },

    // 질문(객관식, 체크박스, 드롭다운 유형) option 업데이트
    setQuestionOptionText(
      state,
      action: PayloadAction<{
        questionIndex: number;
        optionIndex: number;
        text: string;
      }>
    ) {
      const { questionIndex, optionIndex, text } = action.payload;
      state.questions[questionIndex].options![optionIndex] = text;
    },

    // 질문(객관식, 체크박스, 드롭다운 유형) option 추가
    addQuestionOption(state, action: PayloadAction<{ questionIndex: number }>) {
      const questionIndex = action.payload.questionIndex;
      const newIndex = Number(state.questions[questionIndex].options!.length) + 1;
      const initialValue = `옵션${newIndex}`;

      state.questions[questionIndex].options!.push(initialValue);
    },

    // 질문(객관식, 체크박스, 드롭다운 유형) option 삭제
    deleteQuestionOption(
      state,
      action: PayloadAction<{ questionIndex: number; optionIndex: number }>
    ) {
      const { questionIndex, optionIndex } = action.payload;
      state.questions[questionIndex].options!.splice(optionIndex, 1);
    },

    // 질문 복사
    copyQuestion(
      state,
      action: PayloadAction<{
        questionIndex: number;
      }>
    ) {
      const questionIndex = action.payload.questionIndex;
      const copiedQuestion = state.questions[questionIndex];

      const newQuestion = {
        ...copiedQuestion,
      };

      state.questions.splice(questionIndex + 1, 0, newQuestion);
    },

    // 질문 삭제
    deleteQuestion(state, action: PayloadAction<{ questionIndex: number }>) {
      state.questions.splice(action.payload.questionIndex, 1);
    },

    // 필수 질문 설정 및 해제
    setQuestionRequired(state, action: PayloadAction<{ questionIndex: number }>) {
      const questionIndex = action.payload.questionIndex;
      state.questions[questionIndex].required = !state.questions[questionIndex].required;
    },

    // 질문 추가 (객관식으로 추가)
    addQuestion(state) {
      const newQuestion = {
        questionTitle: "제목 없는 질문",
        type: QUESTION_TYPE.MULTIPLECHOICE,
        required: true,
        options: ["옵션1"],
      };

      state.questions.push(newQuestion);
    },

    // 미리보기 답변(단답형, 장문형) 입력받은 값으로 업데이트
    setTextAnswer(state, action: PayloadAction<{ questionIndex: number; textAnswer: string }>) {
      const { questionIndex, textAnswer } = action.payload;
      state.questions[questionIndex].textAnswer = textAnswer;
    },

    // 미리보기 답변(객관식) 입력받은 값으로 업데이트
    setOptionAnswer(
      state,
      action: PayloadAction<{ questionIndex: number; clickedOption: string }>
    ) {
      const { questionIndex, clickedOption } = action.payload;
      state.questions[questionIndex].optionAnswer = clickedOption;
    },

    // 미리보기 답변(체크박스) 체크한 값 업데이트
    setCheckboxAnswer(
      state,
      action: PayloadAction<{
        questionIndex: number;
        optionIndex: number;
      }>
    ) {
      const { questionIndex, optionIndex } = action.payload;

      state.questions[questionIndex].checkboxAnswer![optionIndex] =
        !state.questions[questionIndex].checkboxAnswer![optionIndex];
    },

    // 양식 지우기
    clearAnswer(state) {
      state.questions.forEach((question) => {
        const type = question.type;

        switch (type) {
          case QUESTION_TYPE.SHORT:
          case QUESTION_TYPE.LONG:
            question.textAnswer = "";
            return;

          case QUESTION_TYPE.MULTIPLECHOICE:
          case QUESTION_TYPE.DROPDOWN:
            question.optionAnswer = "";
            return;

          case QUESTION_TYPE.CHECKBOX:
            const length = question.options?.length;
            question.checkboxAnswer = Array(length).fill(false);
            return;

          default:
            break;
        }
      });
    },

    // 질문 드래그앤드롭
    questionDragDrop(
      state,
      action: PayloadAction<{ dragStartIndex: number; dragEndIndex: number }>
    ) {
      const { dragStartIndex, dragEndIndex } = action.payload;
      const dragStartItem = state.questions[dragStartIndex];

      state.questions.splice(dragStartIndex, 1);
      state.questions.splice(dragEndIndex, 0, dragStartItem);
    },

    // 질문(객관식, 체크박스, 드롭다운)의 옵션 드래그앤드롭
    questionOptionDragDrop(
      state,
      action: PayloadAction<{ questionIndex: number; dragStartIndex: number; dragEndIndex: number }>
    ) {
      const { questionIndex, dragStartIndex, dragEndIndex } = action.payload;
      const dragStartItem = state.questions[questionIndex].options![dragStartIndex];

      state.questions[questionIndex].options!.splice(dragStartIndex, 1);
      state.questions[questionIndex].options!.splice(dragEndIndex, 0, dragStartItem);
    },
  },
});

export const {
  setTitle,
  setDesc,
  setQuestionTitle,
  setQuestionType,
  setQuestionOptionText,
  addQuestionOption,
  deleteQuestionOption,
  copyQuestion,
  deleteQuestion,
  setQuestionRequired,
  addQuestion,
  setTextAnswer,
  setOptionAnswer,
  setCheckboxAnswer,
  clearAnswer,
  questionDragDrop,
  questionOptionDragDrop,
} = surveySlice.actions;
