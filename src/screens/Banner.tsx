import { Box, IconButton } from "@mui/material";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { IcTwotoneKeyboardArrowDown } from "~/components/Icons";
import { bannerAtom } from "~/libs/atom/slideAtom";
import { BannerTitleText, BoxCenter, BoxLayer } from "~/styles/styled/styled";

export const Banner = () => {
  const [banner, setBanner] = useAtom(bannerAtom);
  return (
    <Box
      sx={{
        position: "sticky",
        zIndex: 1,
        top: 0,
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
        component="img"
        src={banner.image}
      />
      <BoxLayer className="layerBox">
        <BannerTitleText
          sx={{
            height: "fit-content",
            textAlign: "center",
            position: "relative",
            top: { xs: "30vh", sm: "40vh" },
            maxWidth: { xs: "80%", sm: "60%" },
          }}
        >
          {banner.title}
        </BannerTitleText>
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 50 },
          }}
        >
          <IconButton>
            <a href="#scroll">
              <IcTwotoneKeyboardArrowDown fontSize={50} />
            </a>
          </IconButton>
        </Box>
      </BoxLayer>
    </Box>
  );
};
