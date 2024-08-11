import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Modals from "../../modals";

export default function MainLayout() {
  const { modalActive } = useSelector((state) => state.modal);
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <AnimatePresence>{modalActive && <Modals />}</AnimatePresence>
    </div>
  );
}
