import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Number = () => {
  return (
    <div
      className="flex items-center gap-2
      
    "
    >
      {" "}
      <FaPhoneAlt
        className=" text-[#43D5CB]
      mob:text-[12px]

      desc:text-[14px]
      "
      />{" "}
      <div
        className="flex gap-3
      mob:flex-col mob:gap-0 mob:mt-1
      tab:flex-col tab:gap-0 tab:mt-1
      "
      >
        <a href="tel:+995577500535">+995 577 50 05 35;</a>{" "}
        <a href="tel:+0422258787">+0422 25 87 87</a>
      </div>
    </div>
  );
};

export default Number;
