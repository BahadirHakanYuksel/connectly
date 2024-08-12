import classNames from "classnames";
import { useSelector } from "react-redux";
import {
  closeModalHandle,
  loginHandle,
  openModalHandle,
  signHandle,
} from "../../utils";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Register() {
  const { modalOperation, modalData } = useSelector((state) => state.modal);

  const [passwordInputType, setPasswordInputType] = useState("password");
  const [passwordInputTypeSign, setPasswordInputTypeSign] =
    useState("password");

  const [loginInputs, setLoginInputs] = useState({
    login_email: "",
    login_password: "",
  });

  const [signInputs, setSignInputs] = useState({
    sign_email: "",
    sign_password: "",
    sign_password_again: "",
  });

  const [registerButtons, setRegisterButtons] = useState({
    login_btn: false,
    sign_btn: false,
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const logInputsControl = () => {
    emailRegex.test(loginInputs.login_email) &&
    loginInputs.login_password.length >= 6
      ? setRegisterButtons({ ...registerButtons, login_btn: true })
      : setRegisterButtons({ ...registerButtons, login_btn: false });
  };

  const signInputsControl = () => {
    emailRegex.test(signInputs.sign_email) &&
    signInputs.sign_password.length >= 6 &&
    signInputs.sign_password === signInputs.sign_password_again
      ? setRegisterButtons({ ...registerButtons, sign_btn: true })
      : setRegisterButtons({ ...registerButtons, sign_btn: false });
  };

  const updateInput = (inputInfo, selection) => {
    const { name, value } = inputInfo;

    switch (selection) {
      case "login":
        setLoginInputs({ ...loginInputs, [name]: value.trim() });

        break;

      case "sign":
        setSignInputs({ ...signInputs, [name]: value.trim() });

        break;

      default:
        break;
    }
  };

  const loginAction = (e) => {
    e.preventDefault();
    loginHandle({
      email: loginInputs.login_email,
      password: loginInputs.login_password,
    });
    setLoginInputs({ login_email: "", login_password: "" });
    closeModalHandle();
  };

  const signAction = (e) => {
    e.preventDefault();
    signHandle({
      email: signInputs.sign_email,
      password: signInputs.sign_password,
    });

    setSignInputs({
      sign_email: "",
      sign_password: "",
      sign_password_again: "",
    });
    closeModalHandle();
    openModalHandle({
      operation: "login",
    });
  };
  // login control
  useEffect(() => {
    logInputsControl();
  }, [loginInputs]);

  // sign up control
  useEffect(() => {
    signInputsControl();
  }, [signInputs]);

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
      <div
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
                    name="login_email"
                    value={loginInputs.login_email}
                    onChange={(e) => updateInput(e.target, "login")}
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
                      name="login_password"
                      value={loginInputs.login_password}
                      onChange={(e) => updateInput(e.target, "login")}
                      className="w-full h-11 rounded-md px-2.5 border-2 border-solid focus:bg-main focus:text-white focus:border-white duration-200 text-second font-medium"
                      placeholder="Enter Your Password"
                    />
                    <button
                      onClick={changeTypeOfPasswordInput}
                      type="button"
                      className="flex items-center bg-gray-600 w-8 rounded-full hover:bg-gray-700 h-8 justify-center absolute right-2 top-1/2 -translate-y-1/2 active:bg-main"
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
                onClick={loginAction}
                disabled={!registerButtons.login_btn}
                type="button"
                className="bg-sky-800 hover:bg-sky-700 duration-200 mt-5 h-14 text-xl font-medium rounded-full disabled:pointer-events-none disabled:opacity-75"
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
      </div>
      <div
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
                    name="sign_email"
                    value={signInputs.sign_email}
                    onChange={(e) => updateInput(e.target, "sign")}
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
                      name="sign_password"
                      value={signInputs.sign_password}
                      onChange={(e) => updateInput(e.target, "sign")}
                      className="w-full h-11 rounded-md border-2 border-solid focus:text-white px-2.5 focus:bg-main duration-200 text-second font-medium"
                      placeholder="Enter Your Password"
                    />
                    <button
                      onClick={changeTypeOfPasswordInputSign}
                      type="button"
                      className="flex items-center bg-gray-600 w-8 rounded-full hover:bg-gray-700 h-8 justify-center absolute right-2 top-1/2 -translate-y-1/2 active:bg-main"
                    >
                      <i
                        className={classNames(
                          "fa-regular select-none pointer-events-none",
                          {
                            "fa-eye": passwordInputTypeSign === "password",
                          },
                          {
                            "fa-eye-slash": passwordInputTypeSign === "text",
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
                      name="sign_password_again"
                      value={signInputs.sign_password_again}
                      onChange={(e) => updateInput(e.target, "sign")}
                      className="w-full h-11 rounded-md px-2.5 border-2 border-solid focus:bg-main focus:text-white focus:border-white duration-200 text-cyan-800 font-medium"
                      placeholder="Enter Your Password Again"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={signAction}
                disabled={!registerButtons.sign_btn}
                type="button"
                className="bg-cyan-800 hover:bg-cyan-700 duration-200 mt-8 h-14 text-xl font-medium rounded-full disabled:pointer-events-none disabled:opacity-75"
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
      </div>
    </motion.div>
  );
}
