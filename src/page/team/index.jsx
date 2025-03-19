import { Box, Button, Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ladder from "../../assets/ladder.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      delay: 100,
      once: false,
    });
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: { sm: "row", xs: "column" },
      }}
    >
      <Box
        sx={{
          width: { sm: "50%", xs: "100%" },
          position: "relative",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            pl: 5,
            pt: { sm: 12, xs: 5 },
            pb: { sm: 0, xs: 5 },
          }}
        >
          <Typography sx={{ fontSize: "0.9rem" }} data-aos="fade-left">
            Join our team
          </Typography>
          <Typography
            data-aos="fade-left"
            sx={{ fontSize: "2rem", fontWeight: "bolder" }}
          >
            Careers at
          </Typography>
          <Typography
            data-aos="fade-left"
            sx={{
              fontSize: "2rem",
              color: "rgba(244, 112, 36, 1)",
              fontWeight: "bolder",
            }}
          >
            Our Company
          </Typography>
          <Typography
            data-aos="fade-left"
            sx={{ fontSize: "0.9rem", width: "70%" }}
          >
            We're always looking for talented individuals who share our passion
            for innovation and excellence.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "60%",
            height: "80%",
          }}
        >
          <img
            src={ladder}
            style={{ width: "100%", height: "100%" }}
            alt="pic"
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { sm: "50%", xs: "100%" },
          height: "100vh",
          backgroundColor: "black",
          p: 5,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {[...Array(5)].map((_, index) => (
            <Card
              key={index}
              sx={{
                backgroundColor: "white",
                p: 2,
                height: "15rem",
                mb: index === 4 ? 0 : 5,
                cursor: "pointer",
              }}
            >
              <Typography sx={{ fontSize: "0.9rem" }}>Lorem Ipsum</Typography>
              <Typography sx={{ fontSize: "1.5rem", fontWeight: "bolder" }}>
                Account Manager
              </Typography>
              <Typography sx={{ fontSize: "0.9rem" }}>
                As an Account Manager you will be working with clients to
                understand their needs, collaborating with internal teams
                executing projects profitably whilst growing existing and new
                business accounts.
              </Typography>
              <Button
                varient="outlined"
                sx={{
                  textTransform: "capitalize",
                  borderColor: "rgba(244, 112, 36, 1)",
                  color: "rgba(244, 112, 36, 1)",
                  backgroundColor: "white",
                  border: 2,
                  fontWeight: 700,
                  width: "7rem",
                  my: 2,
                }}
              >
                Apply
              </Button>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
