import { combineReducers, configureStore, PreloadedStateShapeFromReducersMapObject, Store } from "@reduxjs/toolkit";
import { userApi } from "../services/apis";
import { setupListeners } from "@reduxjs/toolkit/query";
import { User } from "./state";

const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,

  userReducer: User.Slices.reducer,
});

export const setupStore = (preloadedState?: PreloadedStateShapeFromReducersMapObject<RootState>) => configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false })
    .concat(userApi.middleware)
});

export const store: Store = setupStore();

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = typeof store.dispatch;
