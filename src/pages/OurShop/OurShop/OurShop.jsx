import Cover from "../../../shared/Cover/Cover";
import shopHeaderBg from "../../../assets/shop/banner2.jpg";
import FoodTabs from "../FoodTabs/FoodTabs";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const { category } = useParams();
  const catBox = ["salad", "pizza", "soups", "desserts", "drinks", "offered"];
  const initialIndex = catBox.indexOf(category);
  // console.log(initialIndex);
  return (
    <div>
      <div>
        <Cover
          title={"our shop"}
          subTitle={"Would you like to try a dish?"}
          parallaxBg={shopHeaderBg}
          fullScreen={true}
          roundInner={true}
          contentBg={"bg-[#15151599]"}
        ></Cover>
      </div>

      <div className="mt-20 max-w-screen-xl mx-auto">
        <FoodTabs initIndex={initialIndex}></FoodTabs>
      </div>
    </div>
  );
};

export default OurShop;
