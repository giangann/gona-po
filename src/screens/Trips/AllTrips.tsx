import { Box, Hidden } from "@mui/material";
import { ImageSlideItem } from "~/components/ImageSlideItem";
import "../../index.css";
import { CustomForm } from "../../components/Form/CustomForm";
import { IndicatorGroup } from "~/components/IndicatorGroup";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { bannerAtom } from "~/libs/atom/slideAtom";
import { BANNER } from "~/constants/constants";
import { allTripsData } from "~/constants/form";
import { animationAtom } from "~/libs/atom/animateAtom";
export const AllTrips = () => {
  // @ts-ignore
  const [banner, setBanner] = useAtom(bannerAtom);
  const [animateAtom, setAnimateAtom] = useAtom(animationAtom);

  useEffect(() => {
    setBanner(BANNER);
    setAnimateAtom(true)
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
        {allTripsData.map((item, index: any) => (
          <ImageSlideItem
            key={index}
            image={{ link: item.image, id: item.id }}
            title={item.description}
            slot={`Còn ${item.slots_remain}/${item.total_slot} slot`}
          />
        ))}
      </Box>
    </Box>
  );
};
