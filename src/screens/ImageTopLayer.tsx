import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { BaseForm } from "~/components/Form/BaseForm";
import { IcTwotoneKeyboardArrowDown } from "~/components/Icons";
import { allTripsData } from "~/constants/form";
import { imageTopLayerAtom } from "~/libs/atom/animateAtom";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";
import {
  BannerTitleText,
  BoxCenter,
  BoxLayer,
  priceBannerStyle,
  thickTypoStyles,
  WhiteTypo,
} from "~/styles/styled/styled";

export const ImageTopLayer = () => {
  const [imageLayer] = useAtom(imageTopLayerAtom);
  const [indexAtom, setIndexAtom] = useAtom(activeHompageSlideAtom);

  const tripData = allTripsData[indexAtom];

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

  const banner = {
    image: tripData.image,
    title: tripData.description,
  };
  return (
    <Box
      sx={{
        backgroundColor: "red",
        zIndex: 5,
        position: "fixed",
        width: "100vw",
        height: "100vh",
        display: imageLayer.display ? "initial" : "none",
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
      <Box
        className="black-layer"
        sx={{
          position: "absolute",
          top: 0,
          height: "100vh",
          width: "100vw",
          backgroundColor: "black",
          opacity: 0.3,
        }}
      />
      <BoxLayer
        sx={{ flexDirection: "column", justifyContent: "space-around" }}
        className="layerBox"
      >
        <Stack alignItems="center" spacing={1}>
          <BannerTitleText
            className="banner-title"
            sx={{
              letterSpacing: 0,
              fontSize: "28px !important",
              height: "fit-content",
              textAlign: "center",
              top: { xs: "30vh", sm: "40vh" },
              maxWidth: { xs: "80%", sm: "60%" },
            }}
          >
            {tripData.description}
          </BannerTitleText>

          <WhiteTypo>
            Còn {tripData.slots_remain}/{tripData.total_slot} slot
          </WhiteTypo>
          <BaseForm
            center
            content={bannerFormContent as any}
            disableBackground
          />
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
