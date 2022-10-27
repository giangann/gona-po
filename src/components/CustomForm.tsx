import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { sampleFormData } from "~/constants/form";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";
import { Header } from "~/screens/Header";
import { FormButton, ThickTypo, ThinTypo } from "~/styles/styled/styled";
import { IcRoundCircle, IcOutlineCircle } from "./Icons";

export const CustomForm = () => {
  const [index] = useAtom(activeHompageSlideAtom);
  const demoData = sampleFormData[index];
  return (
    <Box
      sx={{
        // position: "absolute",
        // bottom: "20vh",
        // left: "40vw",
        minWidth: { xs: 200, sm: 350 },
        zIndex: 1000,
      }}
      border="2px solid white"
    >
      <Stack spacing={2} p={3}>
        <ThickTypo>{demoData.title}</ThickTypo>

        <Stack>
          <ThinTypo>Dates:</ThinTypo>
          <ThickTypo>{demoData.date}</ThickTypo>
        </Stack>

        <Stack>
          <ThinTypo>Activities:</ThinTypo>
          <ThickTypo>{demoData.activity}</ThickTypo>
        </Stack>
      </Stack>
      <Box
        p={2}
        borderTop="1px solid white"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <FormButton>
          <ThickTypo>Trip details</ThickTypo>
        </FormButton>
      </Box>
    </Box>
  );
};
