// import React from 'react';
import { Parallax } from "react-parallax";
import "./Cover.css";

const Cover = ({
  title,
  subTitle,
  contentBg,
  parallaxBg,
  roundInner,
  roundOuter,
  fullScreen,
}) => {
  return (
    <div className={`${!fullScreen && "max-w-screen-xl"}  mx-auto  outer`}>
      <Parallax
        blur={{ min: 1, max: 0 }}
        bgImage={parallaxBg}
        bgImageAlt="the cat"
        strength={-500}
        className={`${roundOuter && "rounded-xl"}`}
      >
        <div className="hero-content mx-auto text-center p-[100px]">
          <div
            className={`p-[100px] w-full ${
              contentBg ? contentBg : "bg-white"
            } ${roundInner && "rounded-xl"}`}
          >
            <h1
              className={`mb-5 text-5xl uppercase font-bold ${
                contentBg ? "text-white" : "text-black"
              }`}
            >
              {title}
            </h1>
            <p className={`mb-5 ${contentBg ? "text-white" : "text-black"} `}>
              {subTitle
                ? subTitle
                : "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
