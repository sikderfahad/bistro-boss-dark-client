// import React from 'react';

import { NavLink } from "react-router-dom";
import useCart from "../../../customHooks/useCart";

const DashboardNavLink = ({ menu }) => {
  const [cart, , isLoading] = useCart();
  return (
    <li>
      <NavLink
        to={menu.path}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "active font-bold flex items-center gap-3 uppercase text-[#c8c8c8]"
            : "font-bold flex items-center gap-3 uppercase hover:bg-white hover:text-gray-900 text-white"
        }
      >
        <span className="text-2xl">{menu.icon}</span>
        <span>{menu.menuName}</span>
      </NavLink>
      {cart && menu.menuName === "my cart" && (
        <div className="badge hover:bg-black hover:text-[#fff] w-[30px] h-[30px] flex items-center text-[#f000b8] bg-black badge-secondary absolute -top-4 -left-4">
          {!isLoading ? (
            <>
              {cart?.length || 0}
              {cart?.length > 99 && "+"}
            </>
          ) : (
            <div className="loading loading-spinner w-[1rem]"></div>
          )}
        </div>
      )}
    </li>
  );
};

export default DashboardNavLink;
