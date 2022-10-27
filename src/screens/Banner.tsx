import { Box } from "@mui/material";
import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { imageBanner } from "~/constants/images";
import { displayBackdropAtom, displayLayerHeader } from "~/libs/atom/slideAtom";

export const Banner = () => {
  const [showLayerHeader, setShowLayerHeader] = useAtom(displayLayerHeader);
  const [showBackDrop, setShowBackDrop] = useAtom(displayBackdropAtom);
  const { ref: bannerRef, inView: bannerRefVisible } = useInView();

  if (bannerRefVisible) {
    setShowLayerHeader(true);
    setShowBackDrop(false);
    console.log("visible");
  } else {
    setShowLayerHeader(false);
    setShowBackDrop(true);
  }
  useEffect(() => {
    setShowLayerHeader(true);
    setShowBackDrop(false);
  }, []);

  return (
    <Box
      ref={bannerRef}
      sx={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      component="img"
      src={imageBanner}
    />
  );
};
