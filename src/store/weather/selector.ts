import { AppState } from "..";
import { DEFfAULT_FETCHER_STATUS } from "../statics";

export const weatherDataSelector = (state: AppState, key: string) =>
  state.weather.data?.[key];

export const weatherFetchStatusSelector = (state: AppState, key: string) =>
  state.weather.fetchsStatus?.[key] || DEFfAULT_FETCHER_STATUS;
