import { Box, Container, Stack, Typography } from "@mui/material";
import {
  BlogTitleText,
  fontSizeContentResponsive,
} from "~/styles/styled/styled";

type BlogCardWithImageAndTitleProps = {
  image: string;
  title: string;
  tag: string;
  date: string;
  view: number;
};
export const BlogCardWithImageAndTitle = (
  props: BlogCardWithImageAndTitleProps
) => {
  const { image, name, tag, created_at, view } = props;
  return (
    <Container
      sx={{
        width: { xs: "unset", sm: "50%" },
        position: "relative",
        padding: "0px !important",
        mt: 3,
      }}
    >
      <Box
        component="img"
        src={image}
        sx={{ borderRadius: 4, width: "100%" }}
      />
      <Box
        p={1}
        sx={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "white",
          boxSizing: "border-box",
          borderBottomRightRadius: 16,
          WebkitBorderBottomLeftRadius: 16,
        }}
      >
        <Typography sx={{ width: "100%", textAlign: "right", ...fontSizeContentResponsive }}>
          {tag}
        </Typography>
        <BlogTitleText
          sx={{
            fontWeight: 700,
            letterSpacing: 0,
            fontSize: { xs: 16, sm: 24 },
            color: "black",
          }}
        >
          {name}
        </BlogTitleText>
        <Stack
          direction="row"
          alignItems="flex-end"
          justifyContent="space-around"
          mt={2}
        >
          <Typography component="span" sx={{ color: "black", opacity: 0.7 }}>
            {created_at}
          </Typography>
          <Typography
            component="span"
            sx={{ color: "black", opacity: 0.7 }}
          >{`${view} xem`}</Typography>
        </Stack>
      </Box>
    </Container>
  );
};
