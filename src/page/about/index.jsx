import { Box, Button, Typography } from "@mui/material";
import React, { useRef } from "react";
import bg from "../../assets/bg.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const About = () => {
  const pathRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      pathRef.current,
      {
        strokeDasharray: pathRef.current.getTotalLength(),
        strokeDashoffset: pathRef.current.getTotalLength(),
      },
      {
        strokeDashoffset: 0,
        duration: 6,
        ease: "power2.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <Box>
      <Box
        sx={{
          pt: { xs: 10, sm: 0 },
          height: { sm: "90vh" },
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${bg})`,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
        <Box
          sx={{
            width: { md: "50%", xs: "100%" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: { xs: "center", sm: "end" },
            px: "4rem",
          }}
        >
          <Typography sx={{ fontSize: "0.8rem" }}>About Us</Typography>
          <Typography sx={{ fontSize: "2.8rem", lineHeight: 1.2 }}>
            Empowering
          </Typography>
          <Typography
            sx={{
              fontSize: "2.8rem",
              fontWeight: "bolder",
              color: "#F47024",
              lineHeight: 1.2,
            }}
          >
            Your Financial Future
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", mt: "0.5rem" }}>
            At Our Company, we are committed to providing ethical,
            research-driven financial solutions that help you achieve your
            goals. With integrity at our core, we tailor our strategies to meet
            your unique needs, ensuring long-term success and financial
            security.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              position: "relative",
              overflow: "hidden",
              textTransform: "capitalize",
              border: "3.5px solid #F47024",
              color: "black",
              fontWeight: "bold",
              fontSize: "1.2rem",
              mt: "2rem",
              mb: "5rem",
              backgroundImage: "linear-gradient(to right, #F47024, #F47024)", // Background from left to right for RTL
              backgroundSize: "0% 100%",
              backgroundRepeat: "no-repeat",
              transition:
                "background-size 0.4s ease-in-out, color 0.4s ease-in-out",
              "&:hover": {
                backgroundSize: "100% 100%",
                color: "white",
              },
            }}
          >
            Know More
          </Button>
        </Box>
        <Box
          sx={{
            width: { sm: "50%", xs: "100%" },
            height: "100%",
          }}
        >
          <svg
            id="mySvg"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="auto"
            viewBox="0 0 869 832"
            fill="none"
          >
            <path
              ref={pathRef}
              id="myPath"
              d="M35.5 832V627.5H232V427H446.5V233H651.5V35H868.5"
              stroke="#F47024"
              strokeWidth="70"
            />
          </svg>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          px: "2.5rem",
          gap: "2rem",
          my: "4rem",
        }}
      >
        <Box sx={{ width: { sm: "20%", xs: "100%" } }}>
          <Typography>Overview</Typography>
          <Typography sx={{ fontSize: "1.6rem", fontWeight: 500 }}>
            Our Financial
          </Typography>
          <Typography
            sx={{
              color: "rgba(244, 112, 36, 1)",
              fontSize: "1.8rem",
              fontWeight: "bolder",
            }}
          >
            Growth Approach.
          </Typography>
        </Box>
        <Box sx={{ width: { sm: "80%", xs: "100%" }, pt: "5rem" }}>
          <Typography
            sx={{
              fontSize: "1.2rem",
              wordBreak: "break-all",
              lineHeight: "2.5rem",
            }}
          >
            At Our Company, we believe in delivering{" "}
            <span style={{ fontWeight: "bolder" }}>
              financial solutions driven by in-depth research
            </span>{" "}
            and{" "}
            <span style={{ fontWeight: "bolder" }}>unwavering integrity</span> .
            Our{" "}
            <span style={{ fontWeight: "bolder" }}>
              client-first philosophy
            </span>
            ensures that every strategy is tailored to meet{" "}
            <span style={{ fontWeight: "bolder" }}>
              individual financial goals
            </span>
            , fostering long-term success and security. We combine{" "}
            <span style={{ fontWeight: "bolder" }}>
              cutting-edge market analytics
            </span>{" "}
            with
            <span style={{ fontWeight: "bolder" }}>
              personalized insights
            </span>{" "}
            to develop investment plans that are both dynamic and resilient. Our
            approach integrates{" "}
            <span style={{ fontWeight: "bolder" }}>
              risk assessment, wealth optimization, and growth-driven
              methodologies
            </span>{" "}
            , ensuring that our clients benefit from strategies designed for
            <span>sustainable financial advancement.</span>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
