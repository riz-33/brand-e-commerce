import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Chair from "../../assets/Image/interior/1.png";
import Lamp from "../../assets/Image/interior/2.png";
import Mattress from "../../assets/Image/interior/3.png";
import Dishes from "../../assets/Image/interior/4.png";
import Blender from "../../assets/Image/interior/5.png";
import Coffee from "../../assets/Image/interior/6.png";
import Appliance from "../../assets/Image/interior/7.png";
import Pots from "../../assets/Image/interior/8.png";
import bg from "../../assets/Image/backgrounds/Group 969.png";
import { Card } from "antd";

export const Section3 = () => {
  const items = [
    {
      title: "Soft Chairs",
      price: "USD 19",
      img: Chair,
    },
    {
      title: "Lamps",
      price: "USD 19",
      img: Lamp,
    },
    {
      title: "Mattress",
      price: "USD 19",
      img: Mattress,
    },
    {
      title: "Kitchen Dishes",
      price: "USD 19",
      img: Dishes,
    },
    {
      title: "Blenders",
      price: "USD 100",
      img: Blender,
    },
    { title: "Coffee Maker", price: "USD 39", img: Coffee },
    {
      title: "Home Appliance",
      price: "USD 19",
      img: Appliance,
    },
    {
      title: "Flower Pots",
      price: "USD 10",
      img: Pots,
    },
  ];

  return (
    <div
      className="block-item-group1"
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Card
        className="block-item-card"
        style={{
          width: "1180px",
          height: "257px",
          marginTop: "3%",
          border: "1px solid #E0E0E0",
          borderRadius: "6px",
          marginLeft: 0,
        }}
      >
        <Grid container>
          {/* LEFT BANNER */}
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              backgroundImage: `url("${bg}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              p: 3,
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
              height: "257px",
              width: "280px",
            }}
          >
            <Typography variant="h5" fontWeight={700}>
              Home and <br /> outdoor
            </Typography>

            <Button
              variant="contained"
              sx={{
                width: "120px",
                padding: "6px 6px",
                mt: 3,
                background: "#fff",
                color: "#111",
                boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
                borderRadius: "6px",
                textTransform: "none",
                "&:hover": { background: "#f9f9f9" },
              }}
            >
              Source now
            </Button>
          </Grid>

          {/* RIGHT GRID */}
          <Grid item xs={12} md={9} size={6}>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                height: "257px",
                width: "900px",
              }}
            >
              {items.map((item, i) => (
                <Grid
                  key={i}
                  sx={{
                    display: "flex",
                    height: "127px",
                    width: "223px",
                    borderLeft: {
                      sm: i % 4 !== 0 ? "1px solid #e5e7eb" : "none",
                    },
                    borderBottom: i < 4 ? "1px solid #e5e7eb" : "none",
                    p: 2.5,
                  }}
                >
                  <div>
                    <Typography fontWeight={400} fontSize="16px">
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{ color: "#6b7280", mt: 0.5, lineHeight: 1.2 }}
                    >
                      From <br /> {item.price}
                    </Typography>
                  </div>

                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{
                      width: "82px",
                      height: "82px",
                      objectFit: "contain",
                      mt: 1.5,
                      ml: "auto",
                      mr: "auto",
                      display: "block",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};
