import { Box, Hidden, Stack } from "@mui/material";
import { sampleAboutData } from "~/constants/form";
import {
  fontSizeContentResponsive,
  WhiteFilledButton,
  WhiteOutlinedButton,
  BlogTitleText,
  WhiteTypo,
} from "~/styles/styled/styled";
import { Header } from "../Header";
import { Introduce } from "./Introduce";

export const AboutHeader = ({
  tabElement,
  handleToggleTab,
  activeTabId,
}: any) => {
  const headerData = sampleAboutData.header;
  return (
    <Box sx={{ position: "relative", mb: { xs: 10, sm: 20 } }}>
      <Header position="absolute" />
      <Box
        component="img"
        src={headerData.image}
        sx={{
          width: "100%",
          height: { xs: "30vh", sm: "80vh" },
          objectFit: "cover",
          borderRadius: { xs: 2, sm: 8 },
          border: "1px solid white",
        }}
      />

      {/* Introduce - Desktop*/}
      {/* <Hidden smDown> */}
        <Introduce />
      {/* </Hidden> */}

      {/* Avatar and Tabs */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -30, sm: -120 },
          left: { xs: 20, sm: 120 },
        }}
      >
        <Stack direction="row" alignItems="end" spacing={{ xs: 1, sm: 4 }}>
          <Box
            component="img"
            src={headerData.avatar}
            sx={{
              width: { xs: "80px", sm: "250px" },
              height: { xs: "80px", sm: "250px" },
              borderRadius: "50%",
              border: "1px solid white",
              objectFit: "cover",
            }}
          />
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 3 }}
            sx={{ position: "relative", bottom: { xs: 5, sm: 60 } }}
          >
            {tabElement.map((item: any, index: any) =>
              item.id === activeTabId ? (
                <WhiteFilledButton
                  variant="contained"
                  key={index}
                  id={item.id}
                  sx={{
                    height: "fit-content",
                    py: 0,
                    ...fontSizeContentResponsive,
                  }}
                  onClick={() => handleToggleTab(index)}
                >
                  {item.title}
                </WhiteFilledButton>
              ) : (
                <WhiteOutlinedButton
                  key={index}
                  id={item.id}
                  sx={{
                    height: "fit-content",
                    py: 0,
                    ...fontSizeContentResponsive,
                  }}
                  onClick={() => handleToggleTab(index)}
                >
                  {item.title}
                </WhiteOutlinedButton>
              )
            )}
          </Stack>
        </Stack>
      </Box>

      
    </Box>
  );
};
