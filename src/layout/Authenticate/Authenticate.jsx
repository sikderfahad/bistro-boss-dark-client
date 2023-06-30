// import React from 'react';

import { Outlet } from "react-router-dom";
import ToastBox from "../../components/Toast/ToastBox";

const Authenticate = () => {
  return (
    <div>
      <Outlet></Outlet>
      <ToastBox></ToastBox>
    </div>
  );
};

export default Authenticate;
