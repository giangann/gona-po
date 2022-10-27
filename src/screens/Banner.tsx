import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { imageBanner } from "~/constants/images";

export const Banner = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        position: "sticky",
        top: 0,
        zIndex: -100,
      }}
      component="img"
      src={imageBanner}
    />
  );
};
