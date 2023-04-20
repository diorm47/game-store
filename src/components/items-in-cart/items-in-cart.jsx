import React from "react";
import "./items-in-cart.css";

export const ItemsInCart = ({ quantities = 0 }) => {
  return quantities > 0 && <div className="items-in-cart">{quantities}</div>;
};
