import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { CartBlock } from "../cart-block/cart-block";

export const Header = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <NavLink to="/" className="header__store-title">
          Магазин игр
        </NavLink>
      </div>
      <div className="wrapper header__cart-btn-wrapper">
        <CartBlock />
      </div>
    </div>
  );
};
