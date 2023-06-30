// import React from 'react';
import { Parallax } from "react-parallax";
import menu from "../../../assets/home/featured.jpg";
import Title from "../../../shared/Title/Title";
import featuredBg from "../../../assets/home/featured.jpg";

const OurMenuHome = () => {
  return (
    // <div
    //   className={`featured bg-[url('./assets/home/featured.jpg')] bg-no-repeat bg-center bg-fixed`}
    // >
    //   <div className="py-28 px-8 bg-[#15151597]">
    //     <Title
    //       title={"---Check it out---"}
    //       subTitle={"FROM OUR MENU"}
    //       subTitleColor={"text-white"}
    //     ></Title>
    //     <div className="max-w-screen-xl mx-auto">
    //       <div className="grid items-center grid-cols-2 gap-6">
    //         <div>
    //           <img className="w-full h-[400px] rounded-xl" src={menu} alt="" />
    //         </div>
    //         <div className="text-white px-10">
    //           <h3 className="text-xl"> March 20, 2023</h3>
    //           <h1 className="text-4xl my-4">WHERE CAN I GET SOME?</h1>{" "}
    //           <p>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
    //             voluptate facere, deserunt dolores maiores quod nobis quas
    //             quasi. Eaque repellat recusandae ad laudantium tempore
    //             consequatur consequuntur omnis ullam maxime tenetur.
    //           </p>
    //           <button className="btn-category mt-8 bg-transparent relative text-center rounded-lg border-b-[3px]  p-5">
    //             <span className="z-40 uppercase relative text-xl font-medium">
    //               Read More
    //             </span>
    //             <div className="btn-category-overlay z-0 bg-gray-900 absolute rounded-lg w-full "></div>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Parallax
        blur={{ min: 1, max: 0 }}
        bgImage={featuredBg}
        bgImageAlt="the cat"
        strength={-500}
      >
        <div className="py-28 px-8 bg-[#15151597]">
          <Title
            title={"---Check it out---"}
            subTitle={"FROM OUR MENU"}
            subTitleColor={"text-white"}
            borderOpecity={true}
          ></Title>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid items-center grid-cols-2 gap-6">
              <div style={{ boxShadow: "0 0 15px" }} className="rounded-xl">
                <img
                  className="w-full h-[400px] rounded-xl"
                  src={menu}
                  alt=""
                />
              </div>
              <div className="text-white px-10">
                <h3 className="text-xl"> March 20, 2023</h3>
                <h1 className="text-4xl my-4">WHERE CAN I GET SOME?</h1>{" "}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
                <button className="btn-category mt-8 bg-transparent relative text-center rounded-lg border-b-[3px]  p-5">
                  <span className="z-40 uppercase relative text-xl font-medium">
                    Read More
                  </span>
                  <div className="btn-category-overlay z-0 bg-gray-900 absolute rounded-lg w-full "></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default OurMenuHome;
