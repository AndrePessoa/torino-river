import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import weatherSlice, { TWeatherState } from "./weather/reducer";
import waterSlice, { TWaterState } from "./water/reducer";

export type AppState = {
  weather: TWeatherState;
  water: TWaterState;
};

const reducer = combineReducers({
  weather: weatherSlice.reducer,
  water: waterSlice.reducer,
});

export const store = configureStore({
  reducer,
});
