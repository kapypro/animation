import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import ladderVector from "../../assets/Vector.png";
import ladderUnion from "../../assets/Union.png";
import ladderDown from "../../assets/Union (3).png";
import bgEllip from "../../assets/Ellipse 2.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Domain = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useGSAP(() => {
    const section = sectionRef.current;
    const items = itemsRef.current;

    if (!section || !items.length) return;

    // Set initial state
    items.forEach((item, index) => {
      gsap.set(item, { opacity: index === 0 ? 1 : 0, y: index === 0 ? 0 : 100 });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: "+=400%",
          scrub: 1,
          markers: true,
        },
      })
      .to(items, {
        opacity: 1,
        y: 0,
        stagger: {
          each: 1, // Adjust for smoothness
          onComplete: function () {
            gsap.to(this.targets()[0], { opacity: 0, y: -100, delay: 1 }); // Smooth out transition
          },
        },
      });
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        height: { sm: "100vh", xs: "50vh" },
        p: { sm: 8, xs: 3 },
        position: "relative",
        backgroundImage: `url(${bgEllip})`,
        overflow: "hidden",
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
        <img src={ladderUnion} alt="ladder" style={{ width: "100%", height: "100%" }} />
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
        <img src={ladderDown} alt="ladder" style={{ width: "100%", height: "100%" }} />
      </Box>

      {/* Cards */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {[...Array(5)].map((ele, i) => (
          <Box
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(244, 112, 36, 1)",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <Box
              sx={{
                width: { sm: "60%", xs: "100%" },
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                p: { sm: 15, xs: 2 },
                gap: { sm: 5, xs: 1 },
              }}
            >
              <Typography sx={{ color: "white", fontSize: "0.9rem" }}>
                {`0${i + 1}`}
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontSize: { sm: "2rem", xs: "1rem" },
                  fontWeight: "bolder",
                }}
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
                variant="outlined"
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
                width: { sm: "40%", xs: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { sm: "22rem", xs: "5rem" },
                  height: { sm: "20rem", xs: "5rem" },
                }}
              >
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
        ))}
      </Box>
    </Box>
  );
};

export default Domain;
