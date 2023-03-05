import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export interface surveyState {
  title: string;
  desc: string;
  questions: {
    id: string;
    title: string;
    type: string;
    required: boolean;
    data: {};
  }[];
}

const initialState: surveyState = {
  title: "제목",
  desc: "설명",
  questions: [
    {
      id: uuid(),
      title: "제목",
      type: "단답형",
      required: false,
      data: {},
    },
  ],
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<{ title: string }>) {
      state.title = action.payload.title;
    },

    setDesc(state, action: PayloadAction<{ desc: string }>) {
      state.desc = action.payload.desc;
    },

    setQuestionTitle(
      state,
      action: PayloadAction<{ index: number; title: string }>
    ) {
      state.questions[action.payload.index].title = action.payload.title;
    },

    setQuestionType(
      state,
      action: PayloadAction<{ index: number; type: string }>
    ) {
      state.questions[action.payload.index].type = action.payload.type;
    },

    copyQuestion(
      state,
      action: PayloadAction<{
        index: number;
        title: string;
        type: string;
        required: boolean;
        data: {};
      }>
    ) {
      const newQuestion = {
        id: uuid(),
        title: action.payload.title,
        type: action.payload.type,
        required: action.payload.required,
        data: { ...action.payload.data },
      };
      state.questions.splice(action.payload.index + 1, 0, newQuestion);
    },

    deleteQuestion(state, action: PayloadAction<{ index: number }>) {
      state.questions.splice(action.payload.index, 1);
    },

    setQuestionRequired(
      state,
      action: PayloadAction<{ index: number; required: boolean }>
    ) {
      state.questions[action.payload.index].required = !action.payload.required;
    },

    addQuestion(state) {
      const newQuestion = {
        id: uuid(),
        title: "제목",
        type: "단답형",
        required: false,
        data: {},
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
  copyQuestion,
  deleteQuestion,
  setQuestionRequired,
  addQuestion,
} = surveySlice.actions;
