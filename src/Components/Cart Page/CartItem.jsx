// CartItem.jsx
import React from "react";
import { Box, Typography, Button, MenuItem, Select, Divider } from "@mui/material";

const CartItem = ({ item }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "flex-start",
          py: 2,
        }}
      >
        {/* Product Image */}
        <img
          src={item.img}
          alt={item.title}
          style={{
            width: 90,
            height: 90,
            borderRadius: 8,
            objectFit: "cover",
          }}
        />

        {/* Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography fontWeight={600}>{item.title}</Typography>

          <Typography fontSize={14} color="gray">
            Size: {item.size}, Color: {item.color}, Material: {item.material}
          </Typography>

          <Typography fontSize={14} color="gray">
            Seller: {item.seller}
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
            <Button size="small" variant="outlined" color="error">
              Remove
            </Button>

            <Button size="small" variant="outlined">
              Save for later
            </Button>
          </Box>
        </Box>

        {/* Price + Qty Dropdown */}
        <Box textAlign="right">
          <Typography fontWeight={600}>${item.price}</Typography>

          <Select
            size="small"
            value={item.qty}
            sx={{ mt: 1 }}
          >
            {[...Array(10)].map((_, i) => (
              <MenuItem key={i} value={i + 1}>
                Qty: {i + 1}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>

      <Divider />
    </>
  );
};

export default CartItem;
