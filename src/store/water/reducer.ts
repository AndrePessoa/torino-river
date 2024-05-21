import { createSlice } from "@reduxjs/toolkit";
import { TFetchStatus } from "../types";
import { TWaterData } from "./types";

export type TWaterState = {
  fetchsStatus: Record<string, TFetchStatus>;
  data: Record<string, TWaterData>;
};

export type TUpdatePayload = {
  key: string;
  data: TWaterData;
};

export type TFetchStatusPayload = {
  key: string;
  status: TFetchStatus;
};

const waterSlice = createSlice({
  name: "water",
  initialState: {
    fetchsStatus: {},
    data: {},
  },
  reducers: {
    updateData: (
      state: TWaterState,
      { payload }: { payload: TUpdatePayload }
    ) => {
      state.data[payload.key] = payload.data;
    },
    updateFetcherStatus: (
      state: TWaterState,
      { payload }: { payload: TFetchStatusPayload }
    ) => {
      state.fetchsStatus[payload.key] = payload.status;
    },
  },
});

export default waterSlice;
