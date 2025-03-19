import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import cardPic from "../../assets/card.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

// Import Swiper styles
import "swiper/css";

const Company = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      delay: 100,
      once: false,
    });
  }, []);

  return (
    <Box sx={{ py: "8rem", pt: { xs: 40, sm: 0 } }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: "0.5rem", px: 5 }}
      >
        <Typography data-aos="fade-right" sx={{ fontSize: "1rem" }}>
          Updates
        </Typography>
        <Typography
          data-aos="fade-right"
          sx={{ fontSize: "1.5rem", fontWeight: "bolder" }}
        >
          The latest from
        </Typography>
        <Typography
          data-aos="fade-right"
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
          px: "5rem",
          pt: "5rem",
        }}
      >
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Navigation, Autoplay]}
          navigation={true}
          grabCursor={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            // when window width is >= 640px
            940: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card
              sx={{ width: "25rem", height: "25rem", borderRadius: "0.5rem" }}
            >
              <Box sx={{ width: "100%", height: "15rem" }}>
                <img
                  src={cardPic}
                  alt="pic"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    alignItems: "center",
                  }}
                >
                  <Typography>News</Typography>
                  <Typography>15, Feb. 25</Typography>
                </Box>
                <Typography
                  sx={{ width: "60%", fontWeight: "bolder", fontSize: "1rem" }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </Typography>
                <Button
                  varient="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "white",
                    color: "#F47024",
                    border: 2,
                    borderColor: "#F47024",
                    width: "7rem",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{ width: "25rem", height: "25rem", borderRadius: "0.5rem" }}
            >
              <Box sx={{ width: "100%", height: "15rem" }}>
                <img
                  src={cardPic}
                  alt="pic"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    alignItems: "center",
                  }}
                >
                  <Typography>News</Typography>
                  <Typography>15, Feb. 25</Typography>
                </Box>
                <Typography
                  sx={{ width: "60%", fontWeight: "bolder", fontSize: "1rem" }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </Typography>
                <Button
                  varient="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "white",
                    color: "#F47024",
                    border: 2,
                    borderColor: "#F47024",
                    width: "7rem",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{ width: "25rem", height: "25rem", borderRadius: "0.5rem" }}
            >
              <Box sx={{ width: "100%", height: "15rem" }}>
                <img
                  src={cardPic}
                  alt="pic"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    alignItems: "center",
                  }}
                >
                  <Typography>News</Typography>
                  <Typography>15, Feb. 25</Typography>
                </Box>
                <Typography
                  sx={{ width: "60%", fontWeight: "bolder", fontSize: "1rem" }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </Typography>
                <Button
                  varient="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "white",
                    color: "#F47024",
                    border: 2,
                    borderColor: "#F47024",
                    width: "7rem",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{ width: "25rem", height: "25rem", borderRadius: "0.5rem" }}
            >
              <Box sx={{ width: "100%", height: "15rem" }}>
                <img
                  src={cardPic}
                  alt="pic"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    alignItems: "center",
                  }}
                >
                  <Typography>News</Typography>
                  <Typography>15, Feb. 25</Typography>
                </Box>
                <Typography
                  sx={{ width: "60%", fontWeight: "bolder", fontSize: "1rem" }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </Typography>
                <Button
                  varient="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "white",
                    color: "#F47024",
                    border: 2,
                    borderColor: "#F47024",
                    width: "7rem",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{ width: "25rem", height: "25rem", borderRadius: "0.5rem" }}
            >
              <Box sx={{ width: "100%", height: "15rem" }}>
                <img
                  src={cardPic}
                  alt="pic"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    alignItems: "center",
                  }}
                >
                  <Typography>News</Typography>
                  <Typography>15, Feb. 25</Typography>
                </Box>
                <Typography
                  sx={{ width: "60%", fontWeight: "bolder", fontSize: "1rem" }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </Typography>
                <Button
                  varient="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "white",
                    color: "#F47024",
                    border: 2,
                    borderColor: "#F47024",
                    width: "7rem",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{ width: "25rem", height: "25rem", borderRadius: "0.5rem" }}
            >
              <Box sx={{ width: "100%", height: "15rem" }}>
                <img
                  src={cardPic}
                  alt="pic"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    alignItems: "center",
                  }}
                >
                  <Typography>News</Typography>
                  <Typography>15, Feb. 25</Typography>
                </Box>
                <Typography
                  sx={{ width: "60%", fontWeight: "bolder", fontSize: "1rem" }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </Typography>
                <Button
                  varient="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "white",
                    color: "#F47024",
                    border: 2,
                    borderColor: "#F47024",
                    width: "7rem",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card
              sx={{ width: "25rem", height: "25rem", borderRadius: "0.5rem" }}
            >
              <Box sx={{ width: "100%", height: "15rem" }}>
                <img
                  src={cardPic}
                  alt="pic"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
                    alignItems: "center",
                  }}
                >
                  <Typography>News</Typography>
                  <Typography>15, Feb. 25</Typography>
                </Box>
                <Typography
                  sx={{ width: "60%", fontWeight: "bolder", fontSize: "1rem" }}
                >
                  Lorem Ipsum Dolor Sit Amet
                </Typography>
                <Button
                  varient="outlined"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "white",
                    color: "#F47024",
                    border: 2,
                    borderColor: "#F47024",
                    width: "7rem",
                  }}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Company;
