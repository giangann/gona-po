import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import { imageSlideHomePage } from "~/constants/images";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";
import { IcOutlineCircle, IcRoundCircle } from "./Icons";

export const IndicatorGroup = () => {
  const [activeSlide] = useAtom(activeHompageSlideAtom);
  return (
    <Stack spacing={1}>
      {imageSlideHomePage.map((item, index) =>
        index === activeSlide ? (
          <IcRoundCircle color="white" fontSize={12} />
        ) : (
          <IcOutlineCircle color="white" fontSize={12} />
        )
      )}
    </Stack>
  );
};