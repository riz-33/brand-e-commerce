import React from "react";
import CartItem from "../Components/Cart Page/CartItem";
import { CartLater } from "../Components/Cart Page/CartLater";

export const CartPage = () => {
  return (
    <div>
      <CartItem />
      <CartLater />
    </div>
  );
};
