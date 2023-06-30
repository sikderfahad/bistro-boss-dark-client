// import React from 'react';
import authenticateBg from "../../assets/others/authentication.png";
import authenticateImg from "../../assets/others/authentication.gif";
import OtherLogin from "../../shared/OtherLogin/OtherLogin";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ImWarning } from "react-icons/im";
import { ToastMsgSuc } from "../../components/Toast/ToastMsg";

const Register = () => {
  const { createUser, profileName, logOut } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from || "/";

  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // console.log(watch("name"));

  const checkEmpty = () => {
    setIsDisabled(true);
    const isName = watch("name");
    const isMail = watch("email");
    const isPass = watch("password");
    if (isName && isMail && isPass) {
      setIsDisabled(false);
      // console.log(isDisabled);
    }
  };

  const onSubmit = (data) => {
    const { name, email, password } = data;

    // console.log(data);

    setErr("");
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        profileName(user, {
          displayName: name,
        })
          .then(() => {
            const user = { name, email, role: "user" };
            fetch("https://bistro-boss-dark-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
            logOut()
              .then(() => {
                ToastMsgSuc(
                  "Registration successfull! Please login to continue"
                );
                navigate("/user/login");
              })
              .catch((err) => {
                console.log(err.message);
              });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
        const error = err.message;
        const weakPass = error.includes("weak-password");
        const userExist = error.includes("email-already-in-use");
        const noInternet = error.includes("network-request-failed");

        weakPass && setErr("Weak password! please make it strong");
        userExist && setErr("User already exist! please check email");
        noInternet && setErr("No internet! check your connectivity");
      });
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundImage: `url(${authenticateBg})` }}
    >
      <div
        style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        className="relative border rounded-xl px-[145px] py-[50px] max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"
      >
        <div className=" ">
          <h1 className="text-4xl font-semibold text-center mb-14">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                {...register("name", { required: true, max: 20 })}
                aria-invalid={errors.name ? "true" : "false"}
                onBlur={checkEmpty}
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your name"
                required
              />
              {errors.name?.type === "required" && (
                <p role="alert">Name is required</p>
              )}
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                {...register("email", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.email ? "true" : "false"}
                onBlur={checkEmpty}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your email"
                required
              />
              {errors.email && <p role="alert">{errors.email?.message}</p>}
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                {...register("password", { required: "Password is required" })}
                onBlur={checkEmpty}
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your password"
                required
              />
            </div>

            <button
              title={`${isDisabled ? "Click outside! if form was filled" : ""}`}
              disabled={isDisabled}
              id="btnSignup"
              type="submit"
              className={`text-white ${
                isDisabled ? "cursor-not-allowed" : "cursor-pointer"
              } bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-lg px-5 py-2.5 text-center`}
            >
              Sign Up
            </button>
            <OtherLogin signup={true} from={from}></OtherLogin>
          </form>
        </div>
        <div>
          {err && (
            <div className="w-fit px-3 py-4 flex items-center gap-3 bg-red-600 mx-auto font-semibold text-white text-lg my-6 rounded-lg">
              <ImWarning className="text-2xl font-bold"></ImWarning>
              <span className=" animate-pulse">{err}</span>
            </div>
          )}
          <img
            className="w-full h-full rounded-lg"
            src={authenticateImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
