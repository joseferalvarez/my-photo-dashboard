import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "../features/search/searchSlice"
import favouritesReducer from "../features/favourites/favouritesSlice"

export const store = configureStore({
  reducer: {
    searchImages: searchReducer,
    favImages: favouritesReducer,
  },
});
