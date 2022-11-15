import { Box, Grid, Stack } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { DescriptionTitleText, WhiteTypo } from "~/styles/styled/styled";

type DetailDescriptionBlockProps = {
  title?: string;
  content?: string;
  image?: string;
  ref_string?: string;
  handleChangeFormData?: (key: string) => void;
};

export const DetailDescriptionBlock = (props: DetailDescriptionBlockProps) => {
  const { title, content, image, ref_string, handleChangeFormData } = props;

  const { ref: blockRef, inView: blockRefVisible } = useInView();

  if (blockRefVisible) {
    // @ts-ignore
    handleChangeFormData(ref_string || "default_ref");
  }

  const grid = { xs: 12, sm: 12 };
  return (
    <Grid
      container
      spacing={4}
      sx={{ padingX: 0, paddingTop: { xs: 4, sm: 8 }, minHeight: "115vh" }}
    >
      <Grid item {...grid}>
        <Stack spacing={4}>
          <DescriptionTitleText>{title}</DescriptionTitleText>
          <WhiteTypo>{content}</WhiteTypo>
        </Stack>
      </Grid>
      <Grid
        className="ref-grid"
        item
        {...grid}
        ref={blockRef}
        sx={{ padding: '0px !important' }}
      />
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
