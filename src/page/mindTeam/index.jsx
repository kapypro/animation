import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import boy from "../../assets/boy.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Import Swiper styles
import "swiper/css";

const MindTeam = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      delay: 100,
      once: false,
      // offset: 500,
    });
  }, []);
  return (
    <Box sx={{ py: "8rem" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem", px: 5 }}
      >
        <Typography
          sx={{ fontSize: "1rem" }}
          data-aos="slide-right"
          data-aos-delay="350"
        >
          Our Team
        </Typography>
        <Typography
          data-aos="slide-right"
          data-aos-delay="350"
          sx={{ fontSize: "1.5rem", fontWeight: "bolder" }}
        >
          The Minds Behind
        </Typography>
        <Typography
          data-aos="slide-right"
          data-aos-delay="350"
          sx={{ color: "#F47024", fontSize: "2rem", fontWeight: "bolder" }}
        >
          Our Company
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: "1.5rem",
          pt: "5rem",
        }}
      >
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          navigation={true}
          grabCursor={true}
          //   autoplay={{
          //     delay: 2000,
          //     disableOnInteraction: false,
          //   }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            940: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  width: "22rem",
                  height: "25rem",
                  borderRadius: "0.5rem",
                }}
              >
                <Box
                  sx={{ width: "100%", height: "100%", position: "relative" }}
                >
                  <img
                    src={boy}
                    alt="pic"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                      transition: "filter 0.3s ease-in-out",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    backgroundColor: "rgba(244, 112, 36, 0.05)",
                    width: "100%",
                    height: "100%",
                    py: 1,
                    px: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Typography sx={{ fontSize: "1rem", fontWeight: "bolder" }}>
                      Mr. Manoj Singrodia
                    </Typography>
                    <Typography>(General Manager)</Typography>
                    <Typography sx={{ fontSize: "0.9rem" }}>
                      Mr. Anil Mehta, CEO of Ladder UP, is a visionary leader
                      driving financial empowerment and business growth with
                      strategic innovation, integrity, and a passion for helping
                      individuals and organizations succeed.
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default MindTeam;
