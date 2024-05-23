import { createSlice } from "@reduxjs/toolkit";
import { TFetchStatus } from "../types";
import { TWaterData } from "./types";
import { IdroChartFilter } from "./statics";

export type TWaterState = {
  filter: IdroChartFilter;
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
    filter: IdroChartFilter.ALL,
    fetchsStatus: {},
    data: {},
  },
  reducers: {
    changeFilter: (
      state: TWaterState,
      { payload }: { payload: IdroChartFilter }
    ) => {
      state.filter = payload;
    },
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
