import { createSlice } from "@reduxjs/toolkit";
import { TFetchStatus } from "../types";
import { IWeatherDataResult } from "./types";

export type TWeatherState = {
  fetchsStatus: Record<string, TFetchStatus>;
  data: Record<string, IWeatherDataResult>;
};

export type TUpdatePayload = {
  key: string;
  data: IWeatherDataResult;
};

export type TFetchStatusPayload = {
  key: string;
  status: TFetchStatus;
};

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    fetchsStatus: {},
    data: {},
  },
  reducers: {
    updateData: (
      state: TWeatherState,
      { payload }: { payload: TUpdatePayload }
    ) => {
      state.data[payload.key] = payload.data;
    },
    updateFetcherStatus: (
      state: TWeatherState,
      { payload }: { payload: TFetchStatusPayload }
    ) => {
      state.fetchsStatus[payload.key] = payload.status;
    },
  },
});

export default weatherSlice;
