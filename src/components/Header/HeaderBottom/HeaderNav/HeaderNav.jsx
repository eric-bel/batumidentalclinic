import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

const HeaderNav = () => {
  return (
    <div className="flex w-2/3 headerbottom_text">
      <ul className="flex justify-between items-center w-full mob:hidden tab:hidden">
        <li>Главная</li>
        <li>О нас</li>
        <li>Услуги</li>
        <li>Оборудование</li>
        <li>Контакты</li>
      </ul>
      <div className="hidden mob:flex tab:flex items-center w-full justify-end">
        <HiMenuAlt3  className="text-5xl text-[#091D3E]"/>
      </div>
    </div>
  );
};

export default HeaderNav;
