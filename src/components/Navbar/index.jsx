import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutHandle, openModalHandle } from "../../utils";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.register);

  const noSignUpData = [
    {
      title: "Login",
      modalAction: "login",
    },
    {
      title: "Signup",
      modalAction: "signup",
    },
  ];

  const goModal = (modalAction) => {
    openModalHandle({
      operation: modalAction,
    });
  };

  return (
    <nav className="w-full h-16 px-20 navbarGrid items-center">
      <button
        onClick={() => navigate("/")}
        className="flex h-full items-center gap-1.5"
      >
        <img
          src="icons/logo_png.png"
          className="w-[52px] rounded-[18px]"
          alt=""
        />
        <header className="text-2xl font-medium relative">
          Connectly
          <span className="absolute bottom-0 h-[3px] bg-fourth w-4 rounded-full -right-4"></span>
        </header>
      </button>
      <div className="h-full flex items-center justify-center px-10">
        <div className="w-full h-full flex items-center relative">
          <input
            className="navSearchInput border-2 pl-11 px-[68px] border-solid border-myGray focus:border-third bg-main rounded-full h-11 w-full duration-200"
            type="search"
            placeholder="Search"
            name=""
            id=""
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="flex items-center justify-center rounded-full bg-myGray duration-200 absolute left-1 top-1/2 -translate-y-1/2 h-9 w-9">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <AnimatePresence>
            {searchInput.trim().length > 0 && (
              <motion.button
                onClick={() => setSearchInput("")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-20 h-9 flex items-center justify-center bg-second hover:bg-third duration-200 text-sm font-medium rounded-full absolute top-1/2 right-1 -translate-y-1/2"
              >
                Clear
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex items-center justify-end h-full overflow-hidden">
        {!user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center h-full"
          >
            <div className="mr-5 relative h-full flex items-center justify-center">
              Join with us
              <span className="absolute -right-2.5 w-0.5 h-5 top-1/2 -translate-y-1/2 bg-gray-600 rounded-full"></span>
            </div>
            {noSignUpData.map((btn, i) => (
              <button
                onClick={() => goModal(btn.modalAction)}
                className={classNames(
                  "text-base h-9 bg-myGray px-2.5 duration-150  w-24",
                  {
                    "bg-sky-600 hover:bg-sky-500 rounded-l-lg": i === 0,
                  },
                  {
                    "bg-cyan-700 hover:bg-cyan-800 rounded-r-lg": i === 1,
                  }
                )}
                key={i}
              >
                {btn.title}
              </button>
            ))}
          </motion.div>
        )}
        {user && (
          <button
            onClick={logoutHandle}
            type="button"
            className="border-2 border-solid border-gray-500 hover:border-red-600 text-base font-medium px-5 h-10 duration-200 rounded-full"
          >
            Log out
          </button>
        )}
      </div>
    </nav>
  );
}
