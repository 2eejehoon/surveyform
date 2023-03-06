import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { QUESTION_TYPE } from "../constant";

export interface surveyState {
  title: string;
  desc: string;
  questions: {
    id: string;
    title: string;
    type: string;
    required: boolean;
    text: string;
    options: string[];
  }[];
}

const initialState: surveyState = {
  title: "제목 없는 설문지",
  desc: "설문지 설명",
  questions: [
    {
      id: uuid(),
      title: "질문",
      type: QUESTION_TYPE.MULTIPLECHOICE,
      required: false,
      text: "단답형 텍스트",
      options: ["옵션1"],
    },
  ],
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    // 설문지의 제목
    setTitle(state, action: PayloadAction<{ title: string }>) {
      state.title = action.payload.title;
    },

    // 설문지의 설명
    setDesc(state, action: PayloadAction<{ desc: string }>) {
      state.desc = action.payload.desc;
    },

    // 질문의 제목
    setQuestionTitle(
      state,
      action: PayloadAction<{ questionIndex: number; title: string }>
    ) {
      state.questions[action.payload.questionIndex].title =
        action.payload.title;
    },

    // 질문의 유형
    setQuestionType(
      state,
      action: PayloadAction<{ questionIndex: number; type: string }>
    ) {
      const { questionIndex, type } = action.payload;
      state.questions[action.payload.questionIndex].type = type;

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

    // 질문(객관식, 체크박스, 드롭다운 유형) option
    setQuestionOptionText(
      state,
      action: PayloadAction<{
        questionIndex: number;
        optionIndex: number;
        text: string;
      }>
    ) {
      const { questionIndex, optionIndex, text } = action.payload;

      state.questions[questionIndex].options[optionIndex] = text;
    },

    // 질문(객관식, 체크박스, 드롭다운 유형) option 추가
    addQuestionOption(state, action: PayloadAction<{ questionIndex: number }>) {
      const questionIndex = action.payload.questionIndex;
      const newIndex =
        Number(state.questions[questionIndex].options?.length) + 1;
      state.questions[questionIndex].options?.push(`옵션${newIndex}`);
    },

    // 질문(객관식, 체크박스, 드롭다운 유형) option 삭제
    deleteQuestionOption(
      state,
      action: PayloadAction<{ questionIndex: number; optionIndex: number }>
    ) {
      const { questionIndex, optionIndex } = action.payload;
      state.questions[questionIndex].options.splice(optionIndex, 1);
    },

    // 질문 복사
    copyQuestion(
      state,
      action: PayloadAction<{
        questionIndex: number;
        title: string;
        type: string;
        required: boolean;
        text: string;
        options: string[];
      }>
    ) {
      const { questionIndex, title, type, required, text, options } =
        action.payload;

      const newQuestion = {
        id: uuid(),
        title,
        type,
        required,
        text,
        options,
      };

      state.questions.splice(questionIndex + 1, 0, newQuestion);
    },

    // 질문 삭제
    deleteQuestion(state, action: PayloadAction<{ questionIndex: number }>) {
      state.questions.splice(action.payload.questionIndex, 1);
    },

    // 필수 질문 설정 및 해제
    setQuestionRequired(
      state,
      action: PayloadAction<{ questionIndex: number }>
    ) {
      const questionIndex = action.payload.questionIndex;
      state.questions[questionIndex].required =
        !state.questions[questionIndex].required;
    },

    // 질문 추가
    addQuestion(state) {
      const newQuestion = {
        id: uuid(),
        title: "질문",
        type: QUESTION_TYPE.MULTIPLECHOICE,
        required: false,
        text: "단답형 텍스트",
        options: ["옵션1"],
      };
      state.questions.push(newQuestion);
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
} = surveySlice.actions;
