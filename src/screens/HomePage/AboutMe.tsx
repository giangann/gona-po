import { Box, Container } from "@mui/material";
import { aboutMeHomePage } from "~/constants/form";
import { ImageTitle, WhiteTypo } from "~/styles/styled/styled";

export const AboutMe = () => {
  return (
    <Box
      py={4}
      sx={{ backgroundColor: "black", position: "relative", zIndex: 2 }}
    >
      <Container>
        <Box mb={{ xs: 2, sm: 3 }}>
          <ImageTitle>{aboutMeHomePage.title.toUpperCase()}</ImageTitle>
        </Box>
        <Box>
          <WhiteTypo>{aboutMeHomePage.content}</WhiteTypo>
        </Box>
      </Container>
    </Box>
  );
};
