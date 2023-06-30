const useRandomFood = () => {
  const foodNames = [
    "salad",
    "offered",
    "pizza",
    "drinks",
    "popular",
    "dessert",
    "soup",
  ];
  const randomIndex = Math.floor(Math.random() * foodNames.length);
  const randomFoodName = foodNames[randomIndex];
  return randomFoodName;
};

export default useRandomFood;
