import { useSelector } from "react-redux";
import { AppState } from "..";
import { historyBackToPageSelector, historySelector } from "./selector";

export const useHistory = () =>
  useSelector((state: AppState) => historySelector(state));

export const useBackToPage = (currentLocation: string) =>
  useSelector((state: AppState) =>
    historyBackToPageSelector(state, currentLocation)
  );
