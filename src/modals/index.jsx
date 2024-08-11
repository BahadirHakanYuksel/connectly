import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { closeModalHandle, openModalHandle } from "../utils";
import Register from "./Register";

export default function Modals() {
  const { modalOperation, modalData } = useSelector((state) => state.modal);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      id="modalsMain"
      onClick={(e) => {
        e.target.id === "modalsMain" && closeModalHandle();
      }}
      className="bg-black bg-opacity-45 fixed left-0 top-0 h-screen w-full overflow-y-auto flex items-center justify-center"
    >
      {(modalOperation === "login" || modalOperation === "signup") && (
        <Register />
      )}
    </motion.div>
  );
}
