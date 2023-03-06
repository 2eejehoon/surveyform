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
    data: string | string[];
  }[];
}

const initialState: surveyState = {
  title: "제목",
  desc: "설명",
  questions: [
    {
      id: uuid(),
      title: "제목",
      type: QUESTION_TYPE.SHORT,
      required: false,
      data: "",
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

      switch (action.payload.type) {
        case QUESTION_TYPE.SHORT:
          state.questions[action.payload.index].data = "";
          return;

        case QUESTION_TYPE.LONG:
          state.questions[action.payload.index].data = "";
          return;

        case QUESTION_TYPE.MULTIPLECHOICE:
          state.questions[action.payload.index].data = ["옵션1"];
          return;

        case QUESTION_TYPE.CHECKBOX:
          state.questions[action.payload.index].data = ["옵션1"];
          return;

        case QUESTION_TYPE.DROPDOWN:
          state.questions[action.payload.index].data = ["옵션1"];
          return;
      }
    },

    setQuestionData(
      state,
      action: PayloadAction<{
        index: number;
        type: string;
        data: string | string[];
      }>
    ) {
      let newData;

      if (typeof action.payload.data === "string") {
        newData = action.payload.data;
      } else if (typeof action.payload.data === "object") {
        newData = [...action.payload.data];
      } else return;

      state.questions[action.payload.index].data = newData;
    },

    copyQuestion(
      state,
      action: PayloadAction<{
        index: number;
        title: string;
        type: string;
        required: boolean;
        data: string | string[];
      }>
    ) {
      let newData;

      if (typeof action.payload.data === "string") {
        newData = action.payload.data;
      } else if (typeof action.payload.data === "object") {
        newData = [...action.payload.data];
      } else return;

      const newQuestion = {
        id: uuid(),
        title: action.payload.title,
        type: action.payload.type,
        required: action.payload.required,
        data: newData,
      };

      state.questions.splice(action.payload.index + 1, 0, newQuestion);
    },

    deleteQuestion(state, action: PayloadAction<{ index: number }>) {
      state.questions.splice(action.payload.index, 1);
    },

    setQuestionRequired(state, action: PayloadAction<{ index: number }>) {
      state.questions[action.payload.index].required =
        !state.questions[action.payload.index].required;
    },

    addQuestion(state) {
      const newQuestion = {
        id: uuid(),
        title: "제목",
        type: QUESTION_TYPE.SHORT,
        required: false,
        data: "",
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
  setQuestionData,
  copyQuestion,
  deleteQuestion,
  setQuestionRequired,
  addQuestion,
} = surveySlice.actions;
