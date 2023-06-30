// import React from 'react';
import { FaUsers } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";

const CounterCard = () => {
  const totalCount = [
    {
      background: "linear-gradient(90deg, #BB34F5 0%, #102032 100%)",
      icon: <GiWallet></GiWallet>,
      name: "Revenue",
      count: 1000,
      shadow: "5px 5px 10px #a732de",
    },
    {
      background: "linear-gradient(90deg, #D3A256 0%, #102032 100%)",
      icon: <FaUsers></FaUsers>,
      name: "Customers",
      count: 1500,
      shadow: "5px 5px 10px #c59954",
    },
    {
      background: "linear-gradient(90deg, #FE4880 0%, #102032 100%)",
      icon: <TbChefHat></TbChefHat>,
      name: "Products",
      count: 103,
      shadow: "5px 5px 10px #f1467c",
    },
    {
      background: "linear-gradient(90deg, #6AAEFF 0%, #102032 100%)",
      icon: <MdLocalShipping></MdLocalShipping>,
      name: "Orders",
      count: 500,
      shadow: "5px 5px 10px #64a5f1",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl font-semibold uppercase">hi, welcome back!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {/* First Card */}

        {totalCount.map((item, idx) => (
          <div
            key={idx}
            className="text-white p-12 rounded-lg "
            style={{
              background: item.background,
              boxShadow: item.shadow && item.shadow,
            }}
          >
            <div className="flex items-center justify-center gap-6 hover:scale-110 hover:-rotate-12 duration-200">
              <span className="text-5xl"> {item.icon}</span>
              <div className="">
                <h1 className="text-4xl font-bold ">{item.count}</h1>
                <p className="text-2xl capitalize">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CounterCard;
