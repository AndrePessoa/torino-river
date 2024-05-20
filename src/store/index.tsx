import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import weatherSlice, { TWeatherState } from "./weather/reducer";
import waterSlice, { TWaterState } from "./water/reducer";
import historySlice, { THistoryState } from "./history/reducer";

export type AppState = {
  weather: TWeatherState;
  water: TWaterState;
  history: THistoryState;
};

const reducer = combineReducers({
  weather: weatherSlice.reducer,
  water: waterSlice.reducer,
  history: historySlice.reducer,
});

export const store = configureStore({
  reducer,
});

export const actions = {
  ...weatherSlice.actions,
  ...waterSlice.actions,
  ...historySlice.actions,
};
