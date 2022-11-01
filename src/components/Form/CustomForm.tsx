import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { useAtom } from "jotai";
import { useNavigate } from "react-router";
import { sampleFormData } from "~/constants/form";
import { activeHompageSlideAtom } from "~/libs/atom/slideAtom";
import { Header } from "~/screens/Header";
import { yellow } from "~/styles/colors";
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
        {demoData.description.toUpperCase()}{" "}
      </ThickTypo>
      <Box
        sx={{
          width: "100%",
          borderRadius: 2,
        }}
        border="2px solid white"
      >
        <Stack alignItems="center" spacing={2} p={3}>
          <ThickTypo sx={{ textAlign: "center" }}>{demoData.title}</ThickTypo>

          <Stack spacing={1} alignItems="center">
            <ThinTypo sx={{ color: yellow['text_form'] }}>Thời gian:</ThinTypo>
            <ThickTypo>{demoData.date}</ThickTypo>
          </Stack>

          <Stack spacing={1} alignItems="center">
            <ThinTypo sx={{ color: yellow['text_form'] }}>Hoạt động:</ThinTypo>
            <ThickTypo>{demoData.activity}</ThickTypo>
          </Stack>
        </Stack>
        <Box
          m={1}
          p={1}
          border="1px solid white"
          sx={{ display: "flex", justifyContent: "center", borderRadius: 2 }}
        >
          <FormButton onClick={handleNavigateTripDetail}>
            <ThickTypo>Chi tiết chuyến đi</ThickTypo>
          </FormButton>
        </Box>
      </Box>
    </Stack>
  );
};
