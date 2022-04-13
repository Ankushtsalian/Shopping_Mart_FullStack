import { createSelector } from "reselect";

export const selectCtegoriesMap = (state) => state.categories;

// export const selectCtegories=createSelector([selectCtegories],(categorieSlice)=>categorieSlice.categoriesMap)

export const selectCtegoriesIsLoading = createSelector(
  [selectCtegoriesMap],
  (categorieSlice) => categorieSlice.isLoading
);
