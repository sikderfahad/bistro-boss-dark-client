import { Swiper, SwiperSlide } from "swiper/react";
import Title from "../../../shared/Title/Title";
import { Pagination } from "swiper";
import useCategory from "../../../customHooks/useCategory";
import Card from "../../../shared/Card/Card";

const ChefRequire = ({ type }) => {
  const [cart] = useCategory();
  const menuCat = cart.filter((item) => item.category === type);

  return (
    <div className="max-w-screen-xl mx-auto">
      <Title
        title={"---Should Try---"}
        subTitle={"CHEF RECOMMENDS"}
        borderOpecity={true}
      ></Title>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper flex items-center justify-center"
      >
        {menuCat.map((item, idx) => (
          <SwiperSlide className="swiper-slider" key={idx}>
            <Card menu={item}></Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChefRequire;
