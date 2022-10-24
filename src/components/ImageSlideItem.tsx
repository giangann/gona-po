import { Box } from "@mui/material";
import { Container } from "@mui/system";

type ImageSlideItemProps = {
  imageLink?: string;
};
export const ImageSlideItem = (props: ImageSlideItemProps) => {
  const { imageLink } = props;
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        width: "100vw",
        py: 4,
        px: "32px !important",
        maxWidth: "100% !important",
        margin: 0,
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{ width: "100%", height: "100%", objectFit:'cover' }}
        component="img"
        src={imageLink}
      ></Box>
    </Container>
  );
};
