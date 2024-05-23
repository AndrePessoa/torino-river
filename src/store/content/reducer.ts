import { createSlice } from "@reduxjs/toolkit";
import { totalDistance } from "../statics";

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
      state.distance = payload * totalDistance;
    },
  },
});

export const { updateDistance } = generalSlice.actions;

export default generalSlice;
