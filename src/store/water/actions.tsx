import { store } from "..";
import waterSlice, { TFetchStatusPayload, TUpdatePayload } from "./reducer";

export const updateData = (payload: TUpdatePayload) =>
  store.dispatch(waterSlice.actions.updateData(payload));
export const updateFetcherStatus = (payload: TFetchStatusPayload) =>
  store.dispatch(waterSlice.actions.updateFetcherStatus(payload));
