import { Box, Stack } from "@mui/material";
import { sampleAboutData } from "~/constants/form";
import {
  fontSizeContentResponsive,
  WhiteFilledButton,
  WhiteOutlinedButton,
} from "~/styles/styled/styled";

export const AboutHeader = ({
  tabElement,
  handleToggleTab,
  activeTabId,
}: any) => {
  const headerData = sampleAboutData.header;
  console.log("tab Element", tabElement);
  return (
    <Box sx={{ position: "relative", mb: 10 }}>
      <Box
        component="img"
        src={headerData.image}
        sx={{
          width: "100%",
          height: { xs: "20vh", sm: "40vh" },
          objectFit: "cover",
          borderRadius: 1,
          border: "1px solid white",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -30, sm: -60 },
          left: { xs: 20, sm: 60 },
        }}
      >
        <Stack direction="row" alignItems="end" spacing={{ xs: 1, sm: 4 }}>
          <Box
            component="img"
            src={headerData.avatar}
            sx={{
              width: { xs: "70px", sm: "150px" },
              height: { xs: "70px", sm: "150px" },
              borderRadius: "50%",
              border: "1px solid white",
              objectFit: "cover",
            }}
          />
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 3 }}
            sx={{ position: "relative", bottom: { xs: 5, sm: 20 } }}
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
