import { store } from "..";
import weatherSlice, { TFetchStatusPayload, TUpdatePayload } from "./reducer";

export const updateData = (payload: TUpdatePayload) =>
  store.dispatch(weatherSlice.actions.updateData(payload));
export const updateFetcherStatus = (payload: TFetchStatusPayload) =>
  store.dispatch(weatherSlice.actions.updateFetcherStatus(payload));
