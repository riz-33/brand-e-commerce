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

const Section3 = () => {
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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        backgroundColor: "#fff",
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
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: 4,
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            minHeight: "260px",
          }}
        >
          <Typography variant="h5" fontWeight={700}>
            Home and <br /> outdoor
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              background: "#fff",
              color: "#111",
              boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
              borderRadius: "8px",
              textTransform: "none",
              "&:hover": { background: "#f9f9f9" },
            }}
          >
            Source now
          </Button>
        </Grid>

        {/* RIGHT GRID */}
        <Grid item xs={12} md={9}>
          <Grid container>
            {items.map((item, i) => (
              <Grid
                item
                xs={6}
                sm={3}
                key={i}
                sx={{
                  borderLeft: {
                    sm: i % 4 !== 0 ? "1px solid #e5e7eb" : "none",
                  },
                  borderBottom: i < 4 ? "1px solid #e5e7eb" : "none",
                  p: 2.5,
                }}
              >
                <Typography fontWeight={600} fontSize="16px">
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ color: "#6b7280", mt: 0.5, lineHeight: 1.2 }}
                >
                  From <br /> {item.price}
                </Typography>

                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: "90px",
                    height: "90px",
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
    </Box>
  );
};

export default Section3;
