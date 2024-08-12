import store from "../stores";
import { closeModal, openModal } from "../stores/modal";
import { login, logout, sign } from "../stores/register";

//?    m o d a l

export const openModalHandle = (modalInfos) => {
  store.dispatch(openModal(modalInfos));
};

export const closeModalHandle = () => {
  store.dispatch(closeModal());
};

//?    r e g i s t e r

export const loginHandle = (loginInfos) => {
  store.dispatch(login(loginInfos));
};

export const signHandle = (signInfos) => {
  store.dispatch(sign(signInfos));
};

export const logoutHandle = () => {
  store.dispatch(logout());
};
