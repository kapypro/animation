import React from "react";
import man from "../../assets/portrait.png";
import { Box, Typography } from "@mui/material";
import vector from "../../assets/Vector.png";

const Ceo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(244, 112, 36, 0.1)",
        height: {sm:"80vh",xs:"90vh"},
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
          width: { sm: "40%", xs: "100%" },
          position: "relative",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "20rem",
            height: "25rem",
            position: "absolute",
            bottom: 0,
            right: "8%",
          }}
        >
          <img
            src={man}
            style={{ width: "100%", height: "100%", objectFit: "fill" }}
            alt="businnes"
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { sm: "60%", xs: "100%" },
          height: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            p: {sm:12,xs:5},
          }}
        >
          <Typography sx={{ fontSize: "0.9rem" }}>Message</Typography>
          <Typography sx={{ fontSize: "1.8rem", fontWeight: 700 }}>
            What our
          </Typography>
          <Typography
            sx={{
              fontSize: "1.8rem",
              fontWeight: 800,
              color: "rgba(244, 112, 36, 1)",
            }}
          >
            {" "}
            CEO Says
          </Typography>
          <Typography
            sx={{ fontSize: "1.2rem", wordBreak: "break-all", mt: 2 }}
          >
            Our Company empowers individuals and businesses with strategic
            financial solutions, investment planning, and business growth
            advisory. We provide expert guidance in wealth management, risk
            assessment, and financial planning to help clients achieve
            sustainable success. Our mission is to elevate financial well-being
            through innovation, integrity, and personalized solutions for
            long-term growth.
          </Typography>
          <Typography sx={{ fontSize: "1rem", fontWeight: 800, mt: 2 }}>
            Raghvendra Nath,
          </Typography>
          <Typography sx={{ fontSize: "1rem" }}>
            MD and CEO, Our Company
          </Typography>
        </Box>
        <Box
          sx={{
            width: "8rem",
            height: "8rem",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <img
            src={vector}
            style={{ width: "100%", height: "100%" }}
            alt="pic"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Ceo;
