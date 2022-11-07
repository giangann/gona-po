import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import { allTripsData } from "~/constants/form";
import { imageSlideHomePage } from "~/constants/images";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";
import { IcBaselineSquare, IcOutlineSquare } from "./Icons";

export const IndicatorGroup = () => {
  const [activeSlide] = useAtom(activeHompageSlideAtom);
  return (
    <Stack spacing={1}>
      {/* @ts-ignore */}
      {allTripsData.map((item, index) =>
        index === activeSlide ? (
          <IcBaselineSquare color="white" fontSize={12} />
        ) : (
          <IcOutlineSquare color="white" fontSize={12} />
        )
      )}
    </Stack>
  );
};
