import classNames from "classnames";
import { useSelector } from "react-redux";
import { closeModalHandle, openModalHandle } from "../../utils";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";

export default function Register() {
  const { modalOperation, modalData } = useSelector((state) => state.modal);

  const [passwordInputType, setPasswordInputType] = useState("password");

  const changeTypeOfPasswordInput = () => {
    passwordInputType === "password"
      ? setPasswordInputType("text")
      : setPasswordInputType("password");
  };

  return (
    <div className="w-[1200px] h-[600px] flex rounded-lg overflow-hidden bg-second">
      <form
        className={classNames("w-[200px] p-3 duration-500", {
          "w-[1000px] bg-third": modalOperation === "login",
        })}
      >
        <AnimatePresence>
          {modalOperation === "signup" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2.5"
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
              className="flex flex-col gap-2.5"
            >
              <header className="text-5xl font-medium text-white ">
                Login
              </header>
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-0.5">
                  <header className="text-xl font-medium pl-3.5 text-gray-100">
                    E-Mail
                  </header>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="w-full h-11 rounded-l-md px-2.5 focus:bg-main focus:text-white duration-200 text-second font-medium"
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
                      className="w-full h-11 rounded-r-md px-2.5 focus:bg-main focus:text-white duration-200 text-second font-medium border-l-2 border-solid border-gray-500"
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
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      <form
        className={classNames("w-[200px] p-3 duration-500", {
          "w-[1000px] bg-third": modalOperation === "signup",
        })}
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
      </form>
    </div>
  );
}
