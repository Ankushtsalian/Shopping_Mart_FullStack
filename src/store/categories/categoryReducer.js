import { CATEGORIES_ACTION_TYPES } from "./categoryTypes";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};
// FETCH_CATEGORY_START: "category/FETCH_CATEGORY_START",
// FETCH_CATEGORY_SUCCESS: "category/FETCH_CATEGORY_SUCCESS",
// FETCH_CATEGORY_FAILED: "category/FETCH_CATEGORY_FAILED",
export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_SUCCESS:
      return { ...state, categoriesMap: payload, isLoading: false };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORY_FAILED:
      return { ...state, error: payload, isLoading: false };

    default:
      return state;
  }
};
