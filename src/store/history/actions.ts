import { store } from "..";
import historySlice from "./reducer";
import { historySelector } from "./selector";

const isSamePage = (currentPath: string, path: string) => {
  if (!currentPath || !path) return false;
  if (currentPath === path) return true;

  return false;
};

export const pushHistory = (payload: string) => {
  const state = store.getState();
  const lastHistory = historySelector(state)[0];
  const isSame = isSamePage(payload, lastHistory);

  if (!payload || isSame) return;

  store.dispatch(historySlice.actions.pushHistory(payload));
};
