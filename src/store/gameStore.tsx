import { configureStore, Store } from "@reduxjs/toolkit";
import { unoReducers } from "./gameSlices";

export const store = configureStore(
    {
        reducer : {
          gameState:  unoReducers
        }
    }
);
export type RootState = ReturnType<typeof store.getState>;