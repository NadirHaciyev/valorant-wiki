import { configureStore } from "@reduxjs/toolkit";
import agentsReducer from "./agents/agentsSlice";
import detailReducer from "./detail/detailSlice";

export const store = configureStore({
  reducer: {
    detail: detailReducer,
    agents: agentsReducer
  }
});
