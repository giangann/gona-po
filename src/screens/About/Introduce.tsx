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
        width: "100%",
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
            width: { xs: "80%", sm: "30%" },
            height: { xs: 80, sm: "unset" },
            overflow: "hidden",
            whiteSpace: "no-wrap",
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
              whiteSpace: "no-wrap",
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
