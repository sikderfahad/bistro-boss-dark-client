// import React from 'react';
import "./Header.css";

import Nav from "../Nav/Nav";
import useAuth from "../../customHooks/useAuth";
import { useState } from "react";
import { VscSignOut } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import avatar from "../../assets/icon/Avatar.png";
import useCart from "../../customHooks/useCart";
import useIsAdmin from "../../customHooks/useIsAdmin";

export const LoginInfo = ({
  user,
  handleMouseEnter,
  handleMouseLeave,
  isHover,
  handledLogout,
}) => {
  return (
    <ul
      style={{ margin: "0" }}
      className={`flex flex-col lg:flex-row items-start lg:items-center gap-4 ${
        user && "mx-auto"
      }`}
    >
      <li
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="lg:w-[150px] lg:h-[80px] flex lg:items-center lg:justify-center duration-200"
      >
        {isHover ? (
          <div className=" duration-200">
            {user?.photoURL ? (
              <img
                className="w-[75px] h-[75px] duration-200 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <img
                className="w-[75px] h-[75px] duration-200"
                src={avatar}
                alt=""
              />
            )}
          </div>
        ) : (
          <h1 className="gradient-title duration-200 lg:text-xl text-lg text-green-500 font-semibold">
            {user?.displayName && user.displayName}
          </h1>
        )}
      </li>
      <li>
        <button onClick={handledLogout} title="Click to Logout">
          <VscSignOut className="lg:text-5xl text-3xl text-red-600" />
        </button>
      </li>
    </ul>
  );
};

const Header = () => {
  const { user, loading, logOut } = useAuth();
  const [isHover, setIsHover] = useState(false);
  const [cart, refetch, isLoading] = useCart();
  // console.log(cart);
  refetch();

  const handledLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMouseEnter = () => {
    user?.displayName && setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const [isAdmin] = useIsAdmin();
  const admin = isAdmin?.admin;
  // console.log(admin);

  const defaultNav = [
    { path: "/", label: "Home" },
    { path: "/contact", label: "Contact us" },
    {
      path: `/dashboard/${admin ? "admin-home" : "client-home"}`,
      label: "Dashboard",
    },
    { path: "/our-menu", label: "Our menu" },
    { path: "/our-shop", label: "Our shop" },
    {
      path: `${!admin && "/dashboard/client-my-cart"}`,
      label: (
        <span className="btn bg-transparent relative p-0 border-none outline-none hover:bg-transparent ">
          <FaShoppingCart className="text-2xl"></FaShoppingCart>

          {cart && (
            <div className="badge badge-secondary absolute -top-2 -right-6 bg-pink-600 text-white">
              {!isLoading ? (
                <>
                  {cart?.length || 0}
                  {cart?.length > 99 && "+"}
                </>
              ) : (
                <div className="loading loading-ring w-[1rem]"></div>
              )}
            </div>
          )}
        </span>
      ),
    },
  ];

  if (admin) {
    defaultNav.pop();
  }

  const userNav = [
    { path: "/user/register", label: "Sign up" },
    { path: "/user/login", label: "Login" },
  ];
  return (
    <div
      style={{ backdropFilter: "blur(10px)" }}
      className="fixed top-0 left-0 w-full z-[999] bg-[#00000059]"
    >
      <div className="navbar  max-w-screen-2xl mx-auto">
        <div className="navbar-start">
          <div className="logo transform scale-[0.80] flex flex-col ">
            <h1>BISTRO BOSS</h1>
            <p>Restaurant</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu uppercase items-center menu-horizontal px-1">
            {defaultNav.map((item, idx) => (
              <Nav key={idx} item={item}></Nav>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu uppercase hidden lg:flex menu-horizontal px-1">
            {!user ? (
              userNav.map((item, idx) => <Nav key={idx} item={item}></Nav>)
            ) : (
              <LoginInfo
                user={user}
                loading={loading}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}
                isHover={isHover}
                handledLogout={handledLogout}
              ></LoginInfo>
            )}
          </ul>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              style={{ transform: "translate(-110px, 10px)" }}
              tabIndex={0}
              className="menu uppercase menu-sm transform translate-x-[-110] dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
              {defaultNav.map((item, idx) => (
                <Nav key={idx} item={item}></Nav>
              ))}
              {!user ? (
                userNav.map((item, idx) => <Nav key={idx} item={item}></Nav>)
              ) : (
                <LoginInfo
                  user={user}
                  loading={loading}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  isHover={isHover}
                  handledLogout={handledLogout}
                ></LoginInfo>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
