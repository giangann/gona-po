import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { useAtom } from "jotai";
import { useInView } from "react-intersection-observer";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";

type Image = {
  link?: string;
  id: number;
};
type ImageSlideItemProps = {
  image: Image;
};
export const ImageSlideItem = (props: ImageSlideItemProps) => {
  const [indexAtom, setIndexAtom] = useAtom(activeHompageSlideAtom);
  const { image } = props;
  const { ref: slideRef, inView: slideRefVisible } = useInView();

  if (slideRefVisible) {
    console.log("image id", image.id);
    setIndexAtom(image.id);
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
        ref={slideRef}
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        component="img"
        src={image.link}
      ></Box>
    </Container>
  );
};
