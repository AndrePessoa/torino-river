import { createSlice } from "@reduxjs/toolkit";

export type TGeneralState = {
  distance: number;
};

const generalSlice = createSlice({
  name: "general",
  initialState: {
    distance: 0,
  },
  reducers: {
    updateDistance: (
      state: TGeneralState,
      { payload }: { payload: number }
    ) => {
      state.distance = payload;
    },
  },
});

export const { updateDistance } = generalSlice.actions;

export default generalSlice;
