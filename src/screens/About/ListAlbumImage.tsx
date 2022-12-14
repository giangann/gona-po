import { Box, Container, Grid, Paper, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { sampleAboutData } from "~/constants/form";
import { yellow } from "~/styles/colors";
import { NewsDate, NewsTitle } from "./News";

export const ListAlbumImage = () => {
  const albumImageData = sampleAboutData.content.album_image;
  return (
    <Container>
      <Grid container spacing={{ xs: 2, sm: 3 }}>
        {albumImageData.map((item, index) => (
          <Grid item xs={6} sm={4}>
            <Link to={`album/${index + 1}`}>
              <Paper
                elevation={4}
                sx={{ position: "relative", padding: "2px" }}
              >
                <Box
                  src={item.image_thumbnail}
                  component="img"
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    boxShadow: 3,
                  }}
                />
                <Box
                  py={{ xs: 0, sm: 1 }}
                  sx={{
                    position: "absolute",
                    backgroundColor: yellow["primary"],
                    bottom: 0,
                    width: "calc(100% - 2px)",
                  }}
                >
                  <Stack alignItems="center">
                    <NewsTitle>{item.title}</NewsTitle>
                    <NewsDate>{item.date}</NewsDate>
                  </Stack>
                </Box>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
