import React from "react";
import { NavLink } from "react-router-dom";

import plate from '../../assets/backgrounds/plate.png';
import bottle from '../../assets/backgrounds/bottle.png';
import blackLogo from '../../assets/backgrounds/black-logo.png'

import style from "../MainMenu/MainMenu.module.css";


const MainMenu = () => {
  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        <NavLink to={"/bar-menu/"} className={style.navItem}></NavLink>
      </div>

      <div className={style.container_circle}>
        <img src={blackLogo} className={style.circle} alt="logo"/>
      </div>

      <img src={bottle} className={style.bottle} alt="plate"/>
      <img src={plate} className={style.plate} alt="plate"/>

      <div className={style.rightSection}>
        <NavLink to={"/dish-menu/"} className={style.navItem}></NavLink>
      </div>
    </div>
  );
};

export default MainMenu;
