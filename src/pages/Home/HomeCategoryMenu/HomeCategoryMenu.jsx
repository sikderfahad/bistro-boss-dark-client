// import React from 'react';

import { useState } from "react";
import CategoryMenu from "../../../shared/CategoryMenu/CategoryMenu";
import MainBtn from "../../../shared/MainBtn/MainBtn";
import Title from "../../../shared/Title/Title";
import useRandomFood from "../../../customHooks/useRandomFood";

const HomeCategoryMenu = () => {
  // const foodNames = [
  //   "salad",
  //   "offered",
  //   "pizza",
  //   "drinks",
  //   "popular",
  //   "dessert",
  //   "soup",
  // ];
  // const randomIndex = Math.floor(Math.random() * foodNames.length);
  // const randomFoodName = foodNames[randomIndex];
  const randomFoodName = useRandomFood();

  const [type, setType] = useState(true);

  const showAllMenu = () => {
    setType(!type);
  };
  return (
    <div className="mt-20 max-w-screen-xl mx-auto">
      <Title
        title={"---Check it out---"}
        subTitle={"FROM OUR MENU"}
        borderOpecity={true}
      ></Title>
      <CategoryMenu type={type ? randomFoodName : "all"}></CategoryMenu>
      <div className="mt-16 text-center">
        <span onClick={showAllMenu}>
          <MainBtn text={type ? "view full menu" : "view short menu"}></MainBtn>
        </span>
      </div>
    </div>
  );
};

export default HomeCategoryMenu;
