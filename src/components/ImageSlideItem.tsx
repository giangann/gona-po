import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  activeHompageSlideAtom,
  displayBackdropAtom,
} from "~/libs/atom/slideAtom";
import { BoxForRef } from "~/styles/styled/styled";

type Image = {
  link?: string;
  id: number;
};
type ImageSlideItemProps = {
  image: Image;
};
export const ImageSlideItem = (props: ImageSlideItemProps) => {
  const [indexAtom, setIndexAtom] = useAtom(activeHompageSlideAtom);
  const [isShowBackdrop, setIsShowBackdrop] = useAtom(displayBackdropAtom);

  const { image } = props;
  const { ref: slideRef, inView: slideRefVisible } = useInView();

  if (slideRefVisible) {
    console.log("image id", image.id);
    setIndexAtom(image.id);
  }

  useEffect(() => {
    console.log("slideRefVisible", slideRefVisible);
    if (slideRefVisible) {
      setIsShowBackdrop(true);
    }
  }, []);
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        width: "100vw",
        py: { xs: 1, sm: 4 },
        px: { xs: 0, sm: "32px !important" },
        maxWidth: "100% !important",
        margin: 0,
        backgroundColor: "black",
        // position: "relative",
      }}
    >
      <Box
        ref={slideRef}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        component="img"
        src={image.link}
      ></Box>
      {/* <BoxForRef ref={slideRef} /> */}
    </Container>
  );
};
