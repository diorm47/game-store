import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import { useSelector } from "react-redux";
import "./cart-block.css";
import { calcTotalPrice } from "../utils";
import { CartMenu } from "../cart-menu/cart-menu";
import { ItemsInCart } from "../items-in-cart/items-in-cart";

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/order");
  }, [navigate]);

  return (
    <div className="cart-block">
      <ItemsInCart quantities={items.length} />
      <BiCartAlt
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice ? (
        <span className="cart-block__total-price">$ {totalPrice}</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={handleClick} />}
    </div>
  );
};
