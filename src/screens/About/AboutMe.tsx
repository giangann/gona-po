import { Box, Container } from "@mui/material";
import { sampleAboutData } from "~/constants/form";
import {
  BlogTitleText,
  fontSizeContentResponsive,
  WhiteTypo,
} from "~/styles/styled/styled";

export const AboutMe = () => {
  const aboutMeData = sampleAboutData.content.introduce;
  return (
    <Container>
      <Box>
        <BlogTitleText sx={{ fontWeight: 700 }}>
          {aboutMeData.title}
        </BlogTitleText>
      </Box>
      <Box
        sx={{
          marginY: "28px !important",
          width: { xs: "100%", sm: "50%" },
          margin: "auto",
        }}
      >
        <WhiteTypo
          sx={{
            textAlign: "center",
            ...fontSizeContentResponsive,
          }}
        >
          {aboutMeData.content}
        </WhiteTypo>
      </Box>
      <Box
        component="img"
        src={aboutMeData.image}
        sx={{ width: "100%", height: "auto" }}
      />
    </Container>
  );
};
