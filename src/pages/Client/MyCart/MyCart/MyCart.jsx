// import React from 'react';

// import useCart from "../../../../custom/useCart";
import ItemTable from "../ItemTable/ItemTable";
import Title from "../../../../shared/Title/Title";
import useCart from "../../../../customHooks/useCart";

const MyCart = () => {
  const [cart] = useCart();

  return (
    <div className="w-10/12 mx-auto">
      <Title
        title={"---My Cart---"}
        subTitle={"WANNA ADD MORE?"}
        subTitleColor={"#fff"}
        opecity={true}
        borderOpecity={true}
      ></Title>

      {!cart.error && (
        <div className="p-12 mt-16 bg-white text-black rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold uppercase">
              Total orders:{" "}
              <span className="text-green-500">{cart?.length}</span>
            </h1>
            <h1 className="text-3xl font-bold uppercase">
              Total price:{" "}
              <span className="text-green-500">
                ${cart?.reduce((a, v) => a + v.foodItem.price, 0)}
              </span>
            </h1>
            <button className="uppercase btn btn-success bg-[#D1A054] text-white">
              pay
            </button>
          </div>
        </div>
      )}

      <div className="mt-8">
        <ItemTable></ItemTable>
      </div>
    </div>
  );
};

export default MyCart;
