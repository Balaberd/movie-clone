import { combineReducers, configureStore } from "@reduxjs/toolkit";
import moviesSlice from "@/entities/movie/model/moviesSlice";

const rootReducer = combineReducers({
  movies: moviesSlice,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
