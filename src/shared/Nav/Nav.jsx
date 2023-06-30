// import React from 'react';

import { NavLink } from "react-router-dom";

const Nav = ({ item }) => {
  // console.log(item);
  return (
    <li>
      <NavLink
        to={item.path}
        className={({ isActive, isPending }) =>
          isActive
            ? "active"
            : isPending
            ? "pending"
            : "text-white link-default"
        }
      >
        {item.label}
      </NavLink>
    </li>
  );
};

export default Nav;
