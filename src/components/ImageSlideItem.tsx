import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useAtom } from "jotai";
import { useInView } from "react-intersection-observer";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";
import {
  BoxCenter,
  fontSizeContentResponsive,
  ImageTitle,
} from "~/styles/styled/styled";
import { motion } from "framer-motion";
import { animationAtom } from "~/libs/atom/animateAtom";

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
  const [animateAtom] = useAtom(animationAtom);
  const { image, title, slot } = props;
  const { ref: slideRef, inView: slideRefVisible } = useInView();
  const heightBrowser = window.innerHeight;

  if (slideRefVisible) {
    setIndexAtom(image.id);
    window.scrollTo(0, heightBrowser * (image.id + 1));
  }

  // useEffect(() => {
  //   console.log("animation change", animateAtom);
  // }, [animationAtom]);
  return (
    <Container
      maxWidth="lg"
      sx={{
        p: "0px !important",
        height: "100vh",
        width: "100vw",
        maxWidth: "100% !important",
        margin: 0,
        backgroundColor: "black",
      }}
    >
      {/* {animateAtom ? (
        <motion.div
          initial={{ width: "95%", height: "95%" }}
          exit={{ width: "100%", height: "100%", transition: { duration: 1 } }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 4,
            }}
            component="img"
            src={image.link}
          />
        </motion.div>
      ) : null} */}
      <BoxCenter
        sx={{ width: "100%", height: "100%", alignItems: "center" }}
        className="box-center"
      >
        <Box
          id="image-slide"
          sx={{
            width: { xs: "100%", sm: animateAtom ? "98%" : "100%" },
            height: { xs: "100%", sm: animateAtom ? "95%" : "100%" },
            transition: "all 0.6s",
            objectFit: "cover",
            borderRadius: { xs: 0, sm: animateAtom ? 4 : 0 },
          }}
          component="img"
          src={image.link}
        />
      </BoxCenter>

      {animateAtom ? (
        <motion.div exit={{ opacity: 0, transition: { duration: 1 } }}>
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
        </motion.div>
      ) : null}

      <Box
        className="refBox"
        sx={{ position: "relative", top: "-50vh" }}
        ref={slideRef}
      />
    </Container>
  );
};
