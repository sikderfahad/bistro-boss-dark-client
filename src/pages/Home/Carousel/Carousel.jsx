import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

import slider1 from "../../../assets/home/01.jpg";
import slider2 from "../../../assets/home/02.jpg";
import slider3 from "../../../assets/home/03.png";
import slider4 from "../../../assets/home/04.jpg";
import slider5 from "../../../assets/home/05.png";
import slider6 from "../../../assets/home/06.png";

const BannerCarousel = () => {
  const sliderImgBox = [slider1, slider2, slider3, slider4, slider5, slider6];
  return (
    <div className=" min-h-screen">
      <Carousel
        autoPlay="true"
        infiniteLoop="true"
        // swipeScrollTolerance="100"
        useKeyboardArrows="true"
        autoFocus="true"
        // emulateTouch="true"
      >
        {sliderImgBox.map((item, idx) => (
          <div className="carousel-container" key={idx}>
            <img src={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default BannerCarousel;
