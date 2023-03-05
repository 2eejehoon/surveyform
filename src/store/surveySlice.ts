import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface surveyState {
  title: string;
  desc: string;
  questions: { id: string; type: string; data: {} }[];
}

const initialState: surveyState = {
  title: "제목",
  desc: "설명",
  questions: [
    {
      id: "1",
      type: "short",
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
  },
});

export const { setTitle, setDesc } = surveySlice.actions;
