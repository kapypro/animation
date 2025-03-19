import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import brand from "../../assets/brand.png";
import bg from "../../assets/Mask group.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Brand = () => {
  const [change, setChange] = useState(1);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      delay: 100,
    });
    AOS.refresh();
  }, [change]);

  return (
    <>
      {change < 4 ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { sm: "row", xs: "column" },
            height: "100vh",
          }}
          onClick={() => setChange(change + 1)}
        >
          <Box
            sx={{
              width: { sm: "50%", xs: "100%" },
              height: { sm: "100%", xs: "50%" },
              backgroundColor: "rgba(244, 112, 36, 1)",
            }}
          >
            <img
              src={brand}
              alt="pic"
              style={{ width: "100%", height: "100%", objectFit: "fill" }}
            />
          </Box>
          <Box
            key={change}
            data-aos="fade-up"
            sx={{
              width: { sm: "50%", xs: "100%" },
              height: { sm: "100%", xs: "50%" },
              backgroundImage: `url(${bg})`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: "1rem",
              }}
            >
              <Typography sx={{ fontSize: "0.8rem" }}>0{change}</Typography>
              <Typography sx={{ fontSize: "1.8rem", fontWeight: "bolder" }}>
                Lorem Ipsum
              </Typography>
              <Typography
                sx={{
                  color: "rgba(244, 112, 36, 1)",
                  fontSize: "1.8rem",
                  fontWeight: "bolder",
                }}
              >
                Dolor Sit Aamet
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                Our expert advisors offer strategic investment planning, risk
                management.
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          onClick={() => setChange(1)}
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgba(244, 112, 36, 1)",
          }}
        >
          <img
            src={brand}
            alt="pic"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
      )}
    </>
  );
};

export default Brand;
