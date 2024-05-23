import { store } from "..";
import waterSlice, { TFetchStatusPayload, TUpdatePayload } from "./reducer";
import { IdroChartFilter } from "./statics";

export const updateData = (payload: TUpdatePayload) =>
  store.dispatch(waterSlice.actions.updateData(payload));
export const updateFetcherStatus = (payload: TFetchStatusPayload) =>
  store.dispatch(waterSlice.actions.updateFetcherStatus(payload));
export const changeFilter = (payload: IdroChartFilter) =>
  store.dispatch(waterSlice.actions.changeFilter(payload));
