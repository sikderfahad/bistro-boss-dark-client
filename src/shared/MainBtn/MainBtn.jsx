// import React from "react";
import { useNavigate } from "react-router-dom";
import "./MainBtn.css";

const MainBtn = ({ text, textColor, border, lessPadding, textBase, to }) => {
  const navigate = useNavigate();
  const btnLink = () => {
    navigate(to && to);
  };
  return (
    <button
      onClick={btnLink}
      className={`btn-category bg-transparent ${
        border && border
      }  relative text-center mx-auto rounded-lg border-b-[3px] ${
        lessPadding ? "py-[10px] px-[20px]" : "p-5"
      } `}
    >
      <span
        className={`z-40 ${
          textColor && textColor
        } text-white uppercase relative ${
          textBase ? "text-base" : "text-xl"
        } font-medium`}
      >
        {text ? text : "View Full  Menu"}
      </span>
      <div className="btn-category-overlay z-0 bg-gray-900 absolute rounded-lg w-full "></div>
    </button>
  );
};

export default MainBtn;
