import { Box, Button, Fab, Typography } from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../assets/Logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      delay: 100,
      once: false,
    });
  }, []);

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: -60,
          left: "10%",
          width: "80%",
          height: "8rem",
          mx: "auto",
          backgroundColor: "rgba(244, 112, 36, 1)",
          display: { sm: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Typography
          data-aos="fade-right"
          data-aos-delay="150"
          sx={{ color: "white", fontSize: "1.5rem", width: "30%" }}
        >
          Subscribe for regular Updates from{" "}
          <span style={{ fontWeight: "bolder" }}>Our Company</span>
        </Typography>
        <Box
          data-aos="fade-left"
          data-aos-delay="150"
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            width: "50%",
          }}
        >
          <input
            style={{
              borderColor: "white",
              backgroundColor: "rgba(244, 112, 36, 1)",
              color: "white",
              padding: "0.6rem",
              width: "18rem",
            }}
            placeholder="Enter Email Address"
          />
          <Button
            variant="contained"
            style={{
              textTransform: "capitalize",
              color: "white",
              borderColor: "white",
              backgroundColor: "rgba(244, 112, 36, 1)",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          pb: "5rem",
          px: "4rem",
          pt: "10rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: { sm: "30%", xs: "100%" },
          }}
        >
          <Box sx={{ width: "5rem", height: "3rem" }}>
            <img
              src={logo}
              alt="logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          <Typography sx={{ color: "white", fontSize: "0.8rem" }}>
            Our expert advisors offer strategic investment planning, risk
            management.
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Fab size="small" color="white" aria-label="edit">
              <LinkedInIcon color="white" />
            </Fab>
            <Fab size="small" color="white" aria-label="edit">
              <XIcon />
            </Fab>
            <Fab size="small" color="white" aria-label="edit">
              <FacebookIcon />
            </Fab>
            <Fab size="small" color="white" aria-label="edit">
              <InstagramIcon />
            </Fab>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            gap: "4rem",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: { sm: "70%", xs: "100%" },
            p: { xs: 5, sm: 0 },
          }}
        >
          <Box sx={{ color: "white", gap: "1rem" }}>
            <Typography sx={{ fontWeight: "bolder" }}>Explore</Typography>
            <ul style={{ listStyle: "none", gap: "1.5rem" }}>
              <li>About Us</li>
              <li>Our Offerings</li>
              <li>Knowledge Centre</li>
              <li>Contact Us</li>
            </ul>
          </Box>
          <Box sx={{ color: "white", gap: "1rem" }}>
            <Typography sx={{ fontWeight: "bolder" }}>SEBI Details</Typography>
            <ul style={{ listStyle: "none", gap: "1.5rem" }}>
              <li>Stock code:</li>
              <li>123456</li>
              <li>ISIN number:</li>
              <li>INE 123D01010</li>
            </ul>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "1rem", color: "white" }}>
              Have any query in your mind?
            </Typography>
            <Typography
              sx={{ fontSize: "3rem", color: "white", fontWeight: "bolder" }}
            >
              Let’s Talk
            </Typography>
            <Button
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                color: "rgba(244, 112, 36, 1)",
                borderColor: "rgba(244, 112, 36, 1)",
              }}
            >
              Let’s have a Call
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
