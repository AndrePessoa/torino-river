import { createSlice } from "@reduxjs/toolkit";

export type THistoryState = {
  history: string[];
};

const historySlice = createSlice({
  name: "history",
  initialState: {
    history: [],
  },
  reducers: {
    pushHistory: (state: THistoryState, { payload }: { payload: string }) => {
      state.history.unshift(payload);
    },
  },
});

export const { pushHistory } = historySlice.actions;

export default historySlice;
