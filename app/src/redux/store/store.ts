import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { homeReducer } from "src/redux/reducers/index.reducer";
import { searchBarReducer } from "src/redux/reducers/search-bar.reducer";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    home: homeReducer,
  },
  middleware: [...getDefaultMiddleware(), thunk], // 여기에 thunk 미들웨어를 추가합니다
});

export type RootState = ReturnType<typeof store.getState>;
