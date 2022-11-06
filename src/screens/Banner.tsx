import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BaseForm } from "~/components/Form/BaseForm";
import { IcTwotoneKeyboardArrowDown } from "~/components/Icons";
import { allTripsData } from "~/constants/form";
import { activeHompageSlideAtom, bannerAtom } from "~/libs/atom/slideAtom";
import {
  BannerTitleText,
  BoxCenter,
  BoxLayer,
  priceBannerStyle,
  thickTypoStyles,
  WhiteTypo,
} from "~/styles/styled/styled";

export const Banner = () => {
  const [banner] = useAtom(bannerAtom);
  const [bannerContent, setBannerContent] = useState<{ [key: string]: string }>(
    {}
  );

  const [indexOfActiveSlide] = useAtom(activeHompageSlideAtom);
  const tripInfor = allTripsData[indexOfActiveSlide];
  const params = useParams();

  useEffect(() => {
    if (params.slug) {
      const tripData = allTripsData.filter(
        (item) => item.slug === params.slug
      )[0];
      const bannerFormContent = {
        "Thời gian": tripData.date,
        "Hoạt động": tripData.activity,
        other: (
          <Typography component="span" sx={{ ...thickTypoStyles }}>
            Giá:
            <Typography component="span" sx={{ ...priceBannerStyle }}>
              {tripData.price}
            </Typography>
            /người
          </Typography>
        ),
      };
      setBannerContent(bannerFormContent as any);
    } else {
      console.log("not");
    }
  }, [params]);
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
        src={params.slug ? tripInfor.image : banner.image}
      />
      <BoxLayer
        sx={{ flexDirection: "column", justifyContent: "space-around" }}
        className="layerBox"
      >
        <Stack alignItems="center" spacing={1}>
          {params?.slug ? (
            <BannerTitleText
              sx={{
                letterSpacing: 0,
                fontSize: "28px !important",
                height: "fit-content",
                textAlign: "center",
                top: { xs: "30vh", sm: "40vh" },
                maxWidth: { xs: "80%", sm: "60%" },
              }}
            >
              {tripInfor.description}
            </BannerTitleText>
          ) : (
            <BannerTitleText
              sx={{
                fontSize: "32px !important",
                height: "fit-content",
                textAlign: "center",
                top: { xs: "30vh", sm: "40vh" },
                maxWidth: { xs: "80%", sm: "60%" },
              }}
            >
              {banner.title}
            </BannerTitleText>
          )}

          {params?.slug ? (
            <>
              <WhiteTypo>
                Còn {tripInfor.slots_remain}/{tripInfor.total_slot} slot
              </WhiteTypo>
              <BaseForm center content={bannerContent} disableBackground />
            </>
          ) : undefined}
        </Stack>
        <BoxCenter
          sx={{
            width: "100%",
            position: "absolute",
            bottom: { xs: 50 },
          }}
        >
          <IconButton>
            <a href="#scroll">
              <IcTwotoneKeyboardArrowDown fontSize={50} />
            </a>
          </IconButton>
        </BoxCenter>
      </BoxLayer>
    </Box>
  );
};
