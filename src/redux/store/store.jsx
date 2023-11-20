import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query/react";
import { mutationApi } from "../api/mutationApi";
import { combineReducers } from "redux";
import { persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import profileReducer from "../slices/profileSlice";

const reducers = combineReducers({
  [mutationApi.reducerPath]: mutationApi.reducer,
  profile: profileReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(mutationApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
