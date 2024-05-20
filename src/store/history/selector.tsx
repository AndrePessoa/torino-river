import { AppState } from "..";
import { homeSubPages } from "../statics";

export const historySelector = (state: AppState) => state.history.history;

export const historyBackToPageSelector = (
  state: AppState,
  currentPage: string
) => {
  const history = historySelector(state);

  // if is on home page, return home page
  if (homeSubPages.includes(currentPage)) {
    return "/";
  }

  const lastPage =
    history.find((page) => {
      return page !== currentPage;
    }) || "/";

  // if previsous page is not from home, return home page
  if (!homeSubPages.includes(lastPage)) {
    return "/";
  }

  // if current page is not home and previous page is subhome, return previous page
  return lastPage;
};
