import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("connectly_user")
    ? JSON.parse(localStorage.getItem("connectly_user"))
    : false,

  users: localStorage.getItem("connectly_users")
    ? JSON.parse(localStorage.getItem("connectly_users"))
    : false,
};

const register = createSlice({
  name: "register",
  initialState,
  reducers: {
    login: (state, action) => {
      if (localStorage.getItem("connectly_users")) {
        state.users.forEach((user) => {
          if (
            user.email === action.payload.email &&
            user.password === action.payload.password
          ) {
            state.user = action.payload;
            localStorage.setItem("connectly_user", JSON.stringify(user));
          }
        });
      } else {
        state.user = action.payload;
        localStorage.setItem("connectly_user", JSON.stringify(user));
      }
    },
    sign: (state, action) => {
      if (!state.users) {
        state.users = [action.payload];
        localStorage.setItem("connectly_users", JSON.stringify(state.users));
      } else {
        let userControlCounter = 0;
        state.users.forEach((user) => {
          user.email !== action.payload.email &&
            user.password !== action.payload.password &&
            userControlCounter++;
        });

        if (userControlCounter === state.users.length) {
          state.users.unshift(action.payload);
          localStorage.setItem("connectly_users", JSON.stringify(state.users));
        }
      }
    },
    logout: (state) => {
      state.user = false;
      localStorage.removeItem("connectly_user");
    },
  },
});

export default register.reducer;
export const { login, sign, logout } = register.actions;
