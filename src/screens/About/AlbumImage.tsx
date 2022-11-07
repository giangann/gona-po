import { Box, Container, Grid, IconButton, Paper, Stack } from "@mui/material";
import { useNavigate, useParams } from "react-router";
import { Header } from "../Header";
import { sampleAboutData } from "~/constants/form";
import { IcSharpArrowBackIos } from "~/components/Icons";
import {
  BlogTitleText,
  fontSizeContentResponsive,
  WhiteTypo,
} from "~/styles/styled/styled";
export const AlbumImage = () => {
  const params = useParams();
  const albumImageData = sampleAboutData.content.album_image[params.id as any];
  const albumImage = albumImageData.list_image;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <Box sx={{ backgroundColor: "black" }}>
      {/* Header */}
      <Box sx={{ position: "relative" }}>
        <Header position="absolute" />
        <Box
          component="img"
          src={albumImageData.image_thumbnail}
          sx={{
            width: "100%",
            height: { xs: "30vh", sm: "60vh" },
            objectFit: "cover",
            borderRadius: 1,
            border: "1px solid white",
          }}
        />
        <Box sx={{ position: "absolute", top: "20%", left: "3vw" }}>
          <IconButton onClick={handleGoBack}>
            <IcSharpArrowBackIos fontSize={50} fontWeight={200} />
          </IconButton>
        </Box>
      </Box>

      <Container>
        {/* Title + description */}
        <Stack sx={{ mt: 3 }}>
          <BlogTitleText>{albumImageData.title} </BlogTitleText>
          <WhiteTypo sx={{ ...fontSizeContentResponsive, textAlign: "center" }}>
            {albumImageData.description}
          </WhiteTypo>
        </Stack>

        {/* list image */}
        <Grid
          container
          sx={{ marginTop: "24px   !important" }}
          spacing={{ xs: 2, sm: 3 }}
        >
          {albumImage.map((item) => (
            <Grid item xs={6} sm={4}>
              <Paper
                elevation={4}
                sx={{ position: "relative", padding: "2px" }}
              >
                <Box
                  src={item}
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    boxShadow: 3,
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
