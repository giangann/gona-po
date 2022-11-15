import { Box, Tooltip } from "@mui/material";
import { sampleAboutData } from "~/constants/form";
import {
  BlogTitleText,
  fontSizeContentResponsive,
  WhiteTypo,
} from "~/styles/styled/styled";

export const Introduce = () => {
  const headerData = sampleAboutData.header;

  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: "28%", sm: "35%" },
        left: { xs: "10%", sm: "50%" },
        width: { xs: "80%", sm: "40%" },
      }}
    >
      <Tooltip
        // open={{ xs: true, sm: false }}
        enterTouchDelay={0}
        leaveTouchDelay={5000}
        followCursor
        title={headerData.trip_introduce}
      >
        <Box
          sx={{
            width: "100%",
            height: { xs: 80, sm: "unset" },
            overflow: "hidden",
            whiteSpace: { xs: "nowrap", md: "unset" },
            textOverflow: "ellipsis",
          }}
        >
          <BlogTitleText
            sx={{
              textAlign: "left",
              mb: { xs: 0, sm: 2 },
              fontSize: { xs: 18, sm: 48 },
            }}
          >
            {headerData.hello}
          </BlogTitleText>
          <WhiteTypo
            sx={{
              ...fontSizeContentResponsive,
              overflow: "hidden",
              // whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {headerData.trip_introduce}
          </WhiteTypo>
        </Box>
      </Tooltip>
    </Box>
  );
};
