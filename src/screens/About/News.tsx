import { Box, Container, Grid, Stack, styled, Typography } from "@mui/material";
import { sampleAboutData } from "~/constants/form";

export const News = () => {
  const newsData = sampleAboutData.content.news;
  const emotionStatus = (emotion: string, location: string) => {
    return (
      <NewsDate>
        Cảm thấy <b>{emotion.toLowerCase()}</b> tại <b>{location}</b>
      </NewsDate>
    );
  };
  return (
    <Container>
      <Box sx={{ width: { xs: "100%", sm: "60%" }, margin: "100px auto" }}>
        <Grid container>
          {newsData.map((item, index) => (
            <Grid
              item
              container
              xs={12}
              sx={{ border: "1px solid white", borderRadius: 1 }}
              p={2}
              marginY={2}
            >
              <Grid item xs={6} sm={4}>
                <Stack
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={{ xs: 3, sm: 16 }}
                >
                  <Stack
                    direction="row"
                    spacing={{ xs: 1, sm: 2 }}
                    alignItems="center"
                  >
                    <Box
                      component="img"
                      src={item.avatar}
                      sx={{
                        width: { xs: 32, sm: 48 },
                        height: { xs: 32, sm: 48 },
                        objectFit: "cover",
                        borderRadius: 1,
                      }}
                    />
                    <Stack>
                      <NewsTitle>{item.website}</NewsTitle>
                      <NewsDate>{item.date}</NewsDate>
                    </Stack>
                  </Stack>
                  <Box>
                    <NewsContent>{item.content_of_blog}</NewsContent>
                  </Box>
                  <Box>{emotionStatus(item.emotion, item.location)}</Box>
                </Stack>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: { xs: 2, md: 4},
                }}
                item
                xs={6}
                sm={8}
              >
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: 1,
                  }}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export const NewsTitle = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 400,
  color: "white",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const NewsDate = styled(Typography)(({ theme }) => ({
  opacity: 0.7,
  fontSize: 14,
  fontWeight: 200,
  color: "white",
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
  },
}));

export const NewsContent = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 400,
  color: "white",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));
