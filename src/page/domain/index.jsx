import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ladderVector from "../../assets/Vector.png";
import ladderUnion from "../../assets/Union.png";
import ladderDown from "../../assets/Union (3).png";
import bgEllip from "../../assets/Ellipse 2.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Domain = () => {
  const [change, setChange] = useState(1);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, [change]);

  // const [change, setChange] = useState(0);
  // const totalCards = 5;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll(".aboutStickySection");
  //     let index = 0;

  //     sections.forEach((section, i) => {
  //       const rect = section.getBoundingClientRect();
  //       if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
  //         index = i;
  //       }
  //     });

  //     setChange(index);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  

  return (
    <Box
      onClick={() => {
        if (change < 5) {
          setChange(change + 1);
        } else {
          setChange(1);
        }
      }}
      sx={{
        width: "100%",
        height: { sm: "100vh", xs: "50vh" },
        p: {sm:8,xs:3},
        position: "relative",
        backgroundImage: `url(${bgEllip})`,
      }}
    >
      <Box
        sx={{
          width: { sm: "20rem", xs: "10rem" },
          height: { sm: "20rem", xs: "10rem" },
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <img
          src={ladderUnion}
          alt="ladder"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          width: { sm: "20rem", xs: "10rem" },
          height: { sm: "20rem", xs: "10rem" },
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <img
          src={ladderDown}
          alt="ladder"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>

      {/* card */}
      <Box
        sx={{
          height: "100%",
          overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          gap: {sm:"5rem",xs:"1rem"},
        }}
      >
        <Box
          key={change}
          data-aos="fade-up"
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(244, 112, 36, 1)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            mb: `${change === 4 ? 0 : 15}`,
            position: "sticky",
            top: 0,
          }}
        >
          <Box
            sx={{
              width: {sm:"60%",xs:"100%"},
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              p: {sm:15,xs:2},
              gap: {sm:5,xs:1},
            }}
          >
            <Typography sx={{ color: "white", fontSize: "0.9rem" }}>
              0{change}
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: {sm:"2rem",xs:"1rem"}, fontWeight: "bolder" }}
            >
              Domain Expertise
            </Typography>
            <Typography sx={{ color: "white" }}>
              Lorem Ipsum Dolor Sit Amet
            </Typography>
            <Typography sx={{ color: "white" }}>
              With decades of expertise, our team crafts strategic financial
              solutions tailored to your goals, leveraging deep industry
              knowledge, market insights, and a commitment to long-term
              financial growth and security.
            </Typography>
            <Button
              varient="outlined"
              sx={{
                border: 2,
                borderColor: "white",
                color: "white",
                backgroundColor: "rgba(244, 112, 36, 1)",
                textTransform: "capitalize",
              }}
            >
              Learn More
            </Button>
          </Box>
          <Box
            sx={{
              width: {sm:"40%",xs:"100%"},
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: {sm:"22rem",xs:"5rem"}, height: {sm:"20rem",xs:"5rem"} }}>
              <img
                src={ladderVector}
                alt="pic"
                style={{
                  width: "100%",
                  height: "100%",
                  mixBlendMode: "screen",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Domain;
