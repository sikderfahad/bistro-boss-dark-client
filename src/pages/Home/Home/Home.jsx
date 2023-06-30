// import React from 'react';

import Cover from "../../../shared/Cover/Cover";
import BannerCarousel from "../Carousel/Carousel";
import parallax1 from "../../../assets/home/chef-service.jpg";
import SwiperHome from "../Swiper/SwiperHome";
import HomeCategoryMenu from "../HomeCategoryMenu/HomeCategoryMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contact from "../Contact/Contact";
import ChefRequire from "../ChefRequire/ChefRequire";
import useRandomFood from "../../../customHooks/useRandomFood";
import Testimony from "../Testimony/Testimony";
import OurMenuHome from "../OurMenuHome/OurMenuHome";
import { useTitle } from "../../../customHooks/useTitle";
const Home = () => {
  useTitle("Home");

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.init();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const randomFoodName = useRandomFood();
  return (
    <div>
      <div>
        <BannerCarousel></BannerCarousel>
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <SwiperHome></SwiperHome>
      </div>

      <div
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        className=" mt-20"
      >
        <Cover
          title={"Bistro Boss"}
          subTitle={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
          }
          parallaxBg={parallax1}
          roundInner={true}
          roundOuter={true}
        ></Cover>
      </div>

      <div data-aos="zoom-in">
        <HomeCategoryMenu></HomeCategoryMenu>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="mt-20"
      >
        <Contact></Contact>
      </div>

      <div data-aos="zoom-in" className="mt-20">
        <ChefRequire type={randomFoodName}></ChefRequire>
      </div>

      <div data-aos="zoom-in" className="mt-20">
        <OurMenuHome></OurMenuHome>
      </div>

      <div data-aos="zoom-in" className="mt-20">
        <Testimony></Testimony>
      </div>
    </div>
  );
};

export default Home;
