import { Box, Hidden } from "@mui/material";
import { ImageSlideItem } from "~/components/ImageSlideItem";
import { imageSlideHomePage } from "~/constants/images";
import "../../index.css";
import { CustomForm } from "../../components/Form/CustomForm";
import { IndicatorGroup } from "~/components/IndicatorGroup";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { bannerAtom } from "~/libs/atom/slideAtom";
import { BANNER } from "~/constants/constants";
export const AllTrips = () => {
  const [banner, setBanner] = useAtom(bannerAtom);

  useEffect(() => {
    setBanner(BANNER);
  }, []);
  return (
    <Box sx={{ position: "relative", zIndex: 2 }}>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100vw",
          backgroundColor: "black",
          opacity: 0.3,
        }}
      />
      <Box sx={{ position: "absolute", height: "100%", width: "100vw" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "sticky",
            height: "100vh",
            top: 0,
            left: 0,
          }}
        >
          <Hidden smDown>
            <Box
              className="indicator"
              sx={{
                position: "absolute",
                top: "45vh",
                right: "3vw",
              }}
            >
              <IndicatorGroup />
            </Box>
          </Hidden>
          <CustomForm />
        </Box>{" "}
      </Box>
      <Box id="scroll">
        {imageSlideHomePage.map((item, index: any) => (
          <ImageSlideItem key={index} image={item} />
        ))}
      </Box>
    </Box>
  );
};
