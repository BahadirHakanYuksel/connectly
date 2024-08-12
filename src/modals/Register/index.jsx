import classNames from "classnames";
import { useSelector } from "react-redux";
import { closeModalHandle, openModalHandle } from "../../utils";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";

export default function Register() {
  const { modalOperation, modalData } = useSelector((state) => state.modal);

  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordInputTypeSign, setPasswordInputTypeSign] =
    useState("password");

  const changeTypeOfPasswordInput = () => {
    passwordInputType === "password"
      ? setPasswordInputType("text")
      : setPasswordInputType("password");
  };

  const changeTypeOfPasswordInputSign = () => {
    passwordInputTypeSign === "password"
      ? setPasswordInputTypeSign("text")
      : setPasswordInputTypeSign("password");
  };

  return (
    <motion.div
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "1100px" }}
      exit={{ opacity: 0, width: 0 }}
      className={classNames(
        "w-[1100px] h-[550px] flex rounded-lg overflow-hidden",
        {
          "!bg-sky-600": modalOperation === "signup",
        },
        {
          "!bg-cyan-800": modalOperation === "login",
        }
      )}
    >
      <form
        className={classNames(
          "w-[200px] p-3 duration-500 h-full border-2 border-solid flex flex-col justify-center border-transparent overflow-hidden relative",
          {
            "!w-[900px] !bg-gray-950 !border-r-0 !rounded-l-lg !relative !border-gray-400":
              modalOperation === "login",
          }
        )}
      >
        <AnimatePresence>
          {modalOperation === "signup" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2.5 h-full justify-start"
            >
              <header className="text-4xl">Do you want to login ?</header>
              <button
                type="button"
                onClick={() => {
                  closeModalHandle();
                  openModalHandle({ operation: "login" });
                }}
                className="bg-main font-medium rounded-full h-12 hover:bg-gray-800 duration-200"
              >
                Let's Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {modalOperation === "login" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2.5 px-40"
            >
              <header className="text-5xl font-medium text-white mb-2.5 relative h-20 flex items-center justify-center">
                Login
                <span className="absolute w-10 h-1 left-1/2 -translate-x-1/2 -bottom-1.5 rounded-full bg-sky-600"></span>
              </header>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col gap-0.5">
                  <header className="text-xl font-medium text-gray-100">
                    E-Mail
                  </header>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="w-full h-11 rounded-md px-2.5 border-2 border-solid focus:bg-main focus:text-white focus:border-white duration-200 text-second font-medium"
                    placeholder="Enter Your E-Mail"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <header className="text-xl font-medium text-gray-100">
                    Password
                  </header>
                  <div className="flex relative">
                    <input
                      type={passwordInputType}
                      name=""
                      id=""
                      className="w-full h-11 rounded-md px-2.5 border-2 border-solid focus:bg-main focus:text-white focus:border-white duration-200 text-second font-medium"
                      placeholder="Enter Your Password"
                    />
                    <button
                      onClick={changeTypeOfPasswordInput}
                      type="button"
                      className="flex items-center bg-gray-600 w-8 rounded-full hover:bg-gray-700 h-8 justify-center absolute right-2 top-1/2 -translate-y-1/2"
                    >
                      <i
                        className={classNames(
                          "fa-regular select-none pointer-events-none",
                          {
                            "fa-eye": passwordInputType === "password",
                          },
                          {
                            "fa-eye-slash": passwordInputType === "text",
                          }
                        )}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="text-sm text-gray-500 hover:text-gray-400 duration-200"
                >
                  Forgot Password
                </button>
              </div>
              <button
                type="submit"
                className="bg-sky-800 hover:bg-sky-700 duration-200 mt-5 h-14 text-xl font-medium rounded-full"
              >
                Login
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {modalOperation === "login" && (
            <motion.button
              initial={{ left: "-240px" }}
              animate={{ left: "4px" }}
              exit={{ left: "-240px" }}
              transition={{ duration: 0.45 }}
              onClick={closeModalHandle}
              type="button"
              className="absolute left-1 top-1 rounded-tl-lg rounded-br-lg bg-slate-700 hover:bg-slate-600 duration-200 w-20 h-10 text-sm "
            >
              Close
            </motion.button>
          )}
        </AnimatePresence>
      </form>
      <form
        className={classNames(
          "w-[200px] p-3 duration-500 relative  border-2 border-solid border-transparent",
          {
            "!w-[900px] !bg-gray-950 !border-l-0 !rounded-r-lg !border-gray-400":
              modalOperation === "signup",
          }
        )}
      >
        <AnimatePresence>
          {modalOperation === "login" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2.5 h-full justify-end"
            >
              <header className="text-4xl">Do you want to signup ?</header>
              <button
                type="button"
                onClick={() => {
                  closeModalHandle();
                  openModalHandle({ operation: "signup" });
                }}
                className="bg-main font-medium rounded-full h-12 hover:bg-gray-800 duration-200"
              >
                Let's Signup
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {modalOperation === "signup" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col h-full justify-center gap-2.5 px-40"
            >
              <header className="text-5xl font-medium text-white mb-2.5 relative h-20 flex items-center justify-center">
                Sign Up
                <span className="absolute w-10 h-1 left-1/2 -translate-x-1/2 -bottom-1.5 rounded-full bg-cyan-600"></span>
              </header>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col gap-0.5">
                  <header className="text-xl font-medium text-gray-100">
                    E-Mail
                  </header>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="w-full h-11 rounded-md border-2 border-solid focus:bg-main focus:text-white px-2.5 duration-200 text-second font-medium"
                    placeholder="Enter Your E-Mail"
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <header className="text-xl font-medium text-gray-100">
                    Password
                  </header>
                  <div className="flex relative">
                    <input
                      type={passwordInputTypeSign}
                      name=""
                      id=""
                      className="w-full h-11 rounded-md border-2 border-solid focus:text-white px-2.5 focus:bg-main duration-200 text-second font-medium"
                      placeholder="Enter Your Password"
                    />
                    <button
                      onClick={changeTypeOfPasswordInputSign}
                      type="button"
                      className="flex items-center bg-gray-600 w-8 rounded-full hover:bg-gray-700 h-8 justify-center absolute right-2 top-1/2 -translate-y-1/2"
                    >
                      <i
                        className={classNames(
                          "fa-regular select-none pointer-events-none",
                          {
                            "fa-eye": passwordInputType === "password",
                          },
                          {
                            "fa-eye-slash": passwordInputType === "text",
                          }
                        )}
                      ></i>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5">
                  <header className="text-xl font-medium text-gray-100">
                    Password Again
                  </header>
                  <div className="flex relative">
                    <input
                      type={passwordInputTypeSign}
                      name=""
                      id=""
                      className="w-full h-11 rounded-md px-2.5 border-2 border-solid focus:bg-main focus:text-white focus:border-white duration-200 text-cyan-800 font-medium"
                      placeholder="Enter Your Password Again"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="bg-cyan-800 hover:bg-cyan-700 duration-200 mt-8 h-14 text-xl font-medium rounded-full"
              >
                Sign up
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {modalOperation === "signup" && (
            <motion.button
              initial={{ right: "-240px" }}
              animate={{ right: "4px" }}
              exit={{ right: "-240px" }}
              transition={{ duration: 0.45 }}
              onClick={closeModalHandle}
              type="button"
              className="absolute right-1 top-1 rounded-tl-lg rounded-br-lg bg-slate-700 hover:bg-slate-600 duration-200 w-20 h-10 text-sm "
            >
              Close
            </motion.button>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  );
}
