import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import Watch from "../../assets/Image/tech/1.png";
import Camera from "../../assets/Image/tech/2.png";
import Headphone from "../../assets/Image/tech/3.png";
import Kettle from "../../assets/Image/tech/4.png";
import Gaming from "../../assets/Image/tech/5.png";
import Laptop from "../../assets/Image/tech/6.png";
import Phone from "../../assets/Image/tech/7.png";
import Mobile from "../../assets/Image/tech/8.png";
import bg from "../../assets/Image/backgrounds/image 98.png";
import { Card } from "antd";

export const Section4 = () => {
  const items = [
    {
      title: "Smart Watches",
      price: "USD 19",
      img: Watch,
    },
    {
      title: "Cameras",
      price: "USD 89",
      img: Camera,
    },
    {
      title: "Headphones",
      price: "USD 10",
      img: Headphone,
    },
    {
      title: "Electric Kettle",
      price: "USD 90",
      img: Kettle,
    },
    {
      title: "Gaming Set",
      price: "USD 35",
      img: Gaming,
    },
    { title: "Laptop & PC", price: "USD 340", img: Laptop },
    {
      title: "Smart Phones",
      price: "USD 19",
      img: Phone,
    },
    {
      title: "Smart Phones",
      price: "USD 240",
      img: Mobile,
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
                  // item
                  // xs={6}
                  // sm={3}
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
