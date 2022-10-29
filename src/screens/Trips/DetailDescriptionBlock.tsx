import { Box, Grid, Stack } from "@mui/material";
import {
  BlogTitleText,
  DescriptionTitleText,
  WhiteTypo,
} from "~/styles/styled/styled";

type DetailDescriptionBlockProps = {
  title?: string;
  content?: string;
  image?: string;
};

export const DetailDescriptionBlock = (props: DetailDescriptionBlockProps) => {
  const { title, content, image } = props;

  const grid = { xs: 12, sm: 12 };
  return (
    <Grid
      container
      spacing={4}
      // px={{ xs: 1, sm: 8 }}
      sx={{ padingX: 0, paddingTop: { xs: 4, sm: 8 } }}
    >
      <Grid item {...grid}>
        <Stack spacing={4}>
          <DescriptionTitleText>{title}</DescriptionTitleText>
          <WhiteTypo>{content}</WhiteTypo>
        </Stack>
      </Grid>
      <Grid item {...grid}>
        <Box
          component="img"
          src={image}
          sx={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
};
