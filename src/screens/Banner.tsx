import { Box } from "@mui/material";
import { atom, useAtom } from "jotai";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { imageBanner } from "~/constants/images";
import { displayBackdropAtom } from "~/libs/atom/slideAtom";
import { BoxForRef } from "~/styles/styled/styled";

export const Banner = () => {
  const [showBackDrop, setShowBackDrop] = useAtom(displayBackdropAtom);
  const { ref: bannerRef, inView: bannerRefVisible } = useInView();
  useEffect(() => {
    setShowBackDrop(false);
  }, [bannerRefVisible]);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
        component="img"
        src={imageBanner}
      />
      <BoxForRef ref={bannerRef} />
    </Box>
  );
};
