import useCategory from "../../customHooks/useCategory";
import "./CategoryMenu.css";
// import useCategory from "../../custom/useCategory";

export const DesignCart = ({ cat }) => {
  return (
    <div className="flex gap-8">
      <div className="cat-thumb relative border overflow-hidden bg-[#D9D9D9] rounded-tr-full rounded-b-full  w-28 h-24">
        <img className="absolute w-full h-full" src={cat.image} alt="" />
      </div>
      <div className="flex">
        <div className="text-start">
          <h1 className="text-linear font-bold text-xl">
            {cat.name} ------------------
          </h1>
          <p className="text-[#dadada] ">{cat.recipe}</p>
        </div>
        <div>
          <p className="text-[#BB8506] ">${cat.price}</p>
        </div>
      </div>
    </div>
  );
};

const CategoryMenu = ({ type }) => {
  const [cart] = useCategory();
  // console.log(cart, type);

  const displayCart = cart.filter((item) => item.category === type);
  // console.log(displayCart);

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 gap-6">
        {displayCart.length > 0
          ? displayCart.map((cat, idx) => (
              <DesignCart key={idx} cat={cat}></DesignCart>
            ))
          : cart.map((cat, idx) => (
              <DesignCart key={idx} cat={cat}></DesignCart>
            ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
