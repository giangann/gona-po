import { Box } from "@mui/material";
import { atom, useAtom } from "jotai";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { imageBanner } from "~/constants/images";
import { displayBackdropAtom } from "~/libs/atom/slideAtom";
import { BoxForRef } from "~/styles/styled/styled";
import { Header } from "./Header";

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
