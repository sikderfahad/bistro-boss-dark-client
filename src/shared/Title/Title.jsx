// import React from 'react';

const Title = ({ title, subTitle, subTitleColor, borderOpecity }) => {
  return (
    <div className="text-center mb-14">
      <h3 className="text-[#D99904] mb-4 italic text-xl">{title}</h3>
      <h1
        className={`${
          subTitleColor ? subTitleColor : "text-white"
        } border-y-4 border-[#E8E8E8] ${
          borderOpecity && "border-opacity-50"
        }  text-4xl w-fit px-10 mx-auto py-4`}
      >
        {subTitle}
      </h1>
    </div>
  );
};

export default Title;
