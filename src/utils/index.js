import store from "../stores";
import { closeModal, openModal } from "../stores/modal";

//?    m o d a l

export const openModalHandle = (modalInfos) => {
  store.dispatch(openModal(modalInfos));
};

export const closeModalHandle = () => {
  store.dispatch(closeModal());
};
