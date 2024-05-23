import { AppState } from "..";
import { DEFfAULT_FETCHER_STATUS } from "../statics";
import { IdroChartFilter } from "./statics";

export const waterDataFilterSelector = (state: AppState) =>
  state.water.filter || IdroChartFilter.ALL;

export const waterDataSelector = (state: AppState, key: string) =>
  state.water.data?.[key];

export const waterFetchStatusSelector = (state: AppState, key: string) =>
  state.water.fetchsStatus?.[key] || DEFfAULT_FETCHER_STATUS;
