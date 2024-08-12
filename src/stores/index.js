import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal";
import register from "./register";

const store = configureStore({
  reducer: { modal, register },
});

export default store;
