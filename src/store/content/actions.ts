import { store } from "..";
import generalSlice from "./reducer";

export const updateDistance = (payload: number) =>
  store.dispatch(generalSlice.actions.updateDistance(payload));
