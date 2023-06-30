// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import {
  FaCalendarAlt,
  FaCartArrowDown,
  FaStar,
  FaWallet,
} from "react-icons/fa";

const ClientData = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 rounded-lg"
      style={{ boxShadow: "rgb(173 164 164) 0px 0px 15px" }}
    >
      <div className="bg-transparent flex flex-col items-center rounded-tl-lg rounded-bl-lg p-24">
        <div
          style={{ boxShadow: "0 0 10px" }}
          className="w-[200px] bg-[#0a1929] flex flex-col items-center  h-[200px] rounded-full "
        >
          <img
            className="w-full rounded-full h-full"
            src={user?.photoURL && user.photoURL}
            alt="User profile"
          />
        </div>
        <h1 className="mt-12 uppercase hover:animate-bounce bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-violet-500 to-white text-3xl font-semibold text-center">
          {user?.displayName && user.displayName}
        </h1>
      </div>

      <div
        className="bg-black rounded-tr-lg rounded-br-lg uppercase flex flex-col p-24"
        // style={{ boxShadow: "5px -5px 10px #FEF9C3" }}
      >
        <h1 className="text-4xl animate-pulse font-semibold text-start bg-clip-text text-transparent bg-gradient-to-r from-rose-500 via-violet-500 to-white">
          your activities
        </h1>
        <div className="flex items-center gap-10">
          <div className="uppercase text-2xl font-semibold mt-8 flex flex-col gap-2">
            <h1 className="flex items-center gap-2 text-[#0088FE] ">
              <FaCartArrowDown></FaCartArrowDown> orders
            </h1>
            <h1 className="flex items-center gap-2 text-[#00C4A1] ">
              <FaStar></FaStar> reviews
            </h1>
            <h1 className="flex items-center gap-2 text-[#FFBB28] ">
              <FaCalendarAlt></FaCalendarAlt> bookings
            </h1>
            <h1 className="flex items-center gap-2 text-[#FF8042] ">
              <FaWallet></FaWallet> payment
            </h1>
          </div>
          <div className="text-2xl font-semibold mt-8 flex flex-col gap-2 text-center">
            <h1 className="flex items-center gap-2 text-[#0088FE] ">:</h1>
            <h1 className="flex items-center gap-2 text-[#00C4A1] ">:</h1>
            <h1 className="flex items-center gap-2 text-[#FFBB28] ">:</h1>
            <h1 className="flex items-center gap-2 text-[#FF8042] ">:</h1>
          </div>
          <div className="text-2xl font-semibold mt-8 flex flex-col items-end gap-2 text-center">
            <h1 className="flex items-center gap-2 text-[#0088FE] ">{10}</h1>
            <h1 className="flex items-center gap-2 text-[#00C4A1] ">{19}</h1>
            <h1 className="flex items-center gap-2 text-[#FFBB28] ">{7}</h1>
            <h1 className="flex items-center gap-2 text-[#FF8042] ">{6}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientData;
