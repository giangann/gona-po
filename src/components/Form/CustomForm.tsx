import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { useNavigate } from "react-router";
import { sampleFormData } from "~/constants/form";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";
import { Header } from "~/screens/Header";
import {
  FormButton,
  ThickTypo,
  ThinTypo,
  widthStyleResponsive,
} from "~/styles/styled/styled";
import { IcRoundCircle, IcOutlineCircle } from "../Icons";

export const CustomForm = () => {
  const [index] = useAtom(activeHompageSlideAtom);
  const demoData = sampleFormData[index];
  const navigate = useNavigate();
  const handleNavigateTripDetail = () => {
    navigate(`trip/${demoData.slug}`);
  };
  return (
    <Stack spacing={2} alignItems="center" sx={{ ...widthStyleResponsive }}>
      <ThickTypo sx={{ textAlign: "center", fontSize: 32 }}>
        {demoData.description}{" "}
      </ThickTypo>
      <Box
        sx={{
          width: "100%",
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
          <FormButton onClick={handleNavigateTripDetail}>
            <ThickTypo>Trip details</ThickTypo>
          </FormButton>
        </Box>
      </Box>
    </Stack>
  );
};
