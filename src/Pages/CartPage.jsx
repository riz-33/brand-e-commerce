import React from "react";
import CartItem from "../Components/Cart Page/CartItem";
import { CartLater } from "../Components/Cart Page/CartLater";
import { DiscountBanner } from "../Components/Product Detail Page/DiscountBanner";

export const CartPage = () => {
  return (
    <div style={{ padding: 15 }}>
      <CartItem />
      <CartLater />
      <DiscountBanner />
    </div>
  );
};
