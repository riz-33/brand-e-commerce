// CartPage.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CartItem from "./CartItem";

import img1 from "../../assets/Image/interior/1.png";
import img2 from "../../assets/Image/interior/2.png";
import img3 from "../../assets/Image/interior/3.png";

const cartData = [
  {
    id: 1,
    title: "T-shirts with multiple colors, for men and lady",
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Artel Market",
    price: "78.99",
    qty: 9,
    img: img1,
  },
  {
    id: 2,
    title: "T-shirts with multiple colors, for men and lady",
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Best factory LLC",
    price: "39.00",
    qty: 3,
    img: img2,
  },
  {
    id: 3,
    title: "T-shirts with multiple colors, for men and lady",
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Artel Market",
    price: "170.50",
    qty: 1,
    img: img3,
  },
];

const Cart = () => {
  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 4,
        p: 3,
        borderRadius: 3,
        backgroundColor: "#fff",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
      }}
    >
      {cartData.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* Footer buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Button variant="contained" color="primary">
          ← Back to shop
        </Button>

        <Button color="error">Remove all</Button>
      </Box>
    </Box>
  );
};

export default Cart;
