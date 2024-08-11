import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalActive: false,
  modalOperation: false,
  modalData: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.modalActive = true;
      state.modalOperation = action.payload.operation;
      state.modalData = action.payload?.mdata;
      document.querySelector("html").style.overflowY = "hidden";
    },
    closeModal: (state) => {
      state.modalActive = false;
      state.modalOperation = false;
      state.modalData = false;
      document.querySelector("html").style.overflowY = "auto";
    },
  },
});

export default modal.reducer;
export const { openModal, closeModal } = modal.actions;
