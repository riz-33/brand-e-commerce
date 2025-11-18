import React from "react";
import "./Style.css";
import { Card } from "antd";
import Section1 from "../Components/Home Page/Section1.jsx";
import { Section2 } from "../Components/Home Page/Section2.jsx";
import Section3 from "../Components/Home Page/Section3";
import { Section4 } from "../Components/Home Page/Section4.jsx";
import { Section5 } from "../Components/Home Page/Section5.jsx";
import { Section6 } from "../Components/Home Page/Section6.jsx";
import { Section7 } from "../Components/Home Page/Section7.jsx";
import { Section8 } from "../Components/Home Page/Section8.jsx";

export const HomePage = () => {
  return (
    <div>
      <Section1 />
      <Section2 />

      <div
        className="block-item-group1"
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Card
          style={{
            width: "1180px",
            height: "257px",
            marginTop: "3%",
            border: "1px solid #E0E0E0",
            borderRadius: "6px",
          }}
        >
          <Section3 />
        </Card>
      </div>
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
};
