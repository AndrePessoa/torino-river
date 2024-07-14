import { AppState } from "..";
import { DEFfAULT_FETCHER_STATUS } from "../statics";

export const waterDataSelector = (state: AppState, key: string) =>
  state.water.data?.[key];

export const waterFetchStatusSelector = (state: AppState, key: string) =>
  state.water.fetchsStatus?.[key] || DEFfAULT_FETCHER_STATUS;
