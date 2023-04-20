import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./game-buy.css";
import { Button } from "../button/button";
import { deleteItemFromCart, setItemInCart } from "../../redux/cart/reducer";

export const GameBuy = ({ game }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === game.id);
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(game.id));
    } else {
      dispatch(setItemInCart(game));
    }
  };
  return (
    <div className="game-buy">
      <span className="game-buy__price">$ {game.price}</span>
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Удалить из корзины" : "Добавить в корзину"}
      </Button>
    </div>
  );
};
