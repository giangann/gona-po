import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useAtom } from "jotai";
import { useInView } from "react-intersection-observer";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";
import {
  fontSizeContentResponsive,
  ImageTitle,
} from "~/styles/styled/styled";

type Image = {
  link?: string;
  id: number;
};
type ImageSlideItemProps = {
  image: Image;
  title: string;
  slot: string;
};
export const ImageSlideItem = (props: ImageSlideItemProps) => {
  // @ts-ignore
  const [indexAtom, setIndexAtom] = useAtom(activeHompageSlideAtom);

  const { image, title, slot } = props;
  const { ref: slideRef, inView: slideRefVisible } = useInView();
  const heightBrowser = window.innerHeight;

  if (slideRefVisible) {
    setIndexAtom(image.id);
    window.scrollTo(0, heightBrowser * (image.id + 1));
  }

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
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius:4,
        }}
        component="img"
        src={image.link}
      />
      <Box
        sx={{
          width: { xs: 200, sm: 400, md: 300 },
          position: "relative",
          top: { xs: "-90vh", sm: "-88vh" },
          left: { xs: "2vw", sm: "2.5vw" },
        }}
      >
        <ImageTitle>{title.toUpperCase()} </ImageTitle>
        <Box
          mt={{ xs: 1, sm: 2 }}
          p={{ xs: 0.5, sm: 1 }}
          sx={{ width: "fit-content", border: "1px solid white" }}
        >
          <Typography
            component="span"
            sx={{ color: "white", ...fontSizeContentResponsive }}
          >
            {slot}
          </Typography>
        </Box>
      </Box>
      <Box
        className="refBox"
        sx={{ position: "relative", top: "-50vh" }}
        ref={slideRef}
      />
    </Container>
  );
};
