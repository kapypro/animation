import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: {md:"flex",xs:"none"},
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        py: "1rem",
        px: "2rem",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <Typography
        sx={{
          fontSize: "2rem",
          fontWeight: "bolder",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#F47024" }}>L</span>
        <span style={{ color: "black" }}>o</span>
        <span style={{ color: "#F47024" }}>g</span>
        <span style={{ color: "black" }}>o</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Typography>Menu 1</Typography>
        <Typography>Menu 2</Typography>
        <Typography>Menu 3</Typography>
        <Typography>Menu 4</Typography>
        <Typography>Menu 5</Typography>
        <Typography>Menu 6</Typography>
      </Box>
      <Button
        variant="outlined"
        sx={{
          fontWeight: "bold",
          color: "#F47024",
          textTransform: "capitalize",
          borderColor: "#F47024",
          "&:hover": { backgroundColor: "orange", color: "black" },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Navbar;
