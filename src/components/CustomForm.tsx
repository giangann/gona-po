import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { sampleFormData } from "~/constants/form";
import { Header } from "~/screens/Header";

export const CustomForm = () => {
  const demoData = sampleFormData[0];
  return (
    <Box sx={{ minWidth: 350 }} border="2px solid white">
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

const ThinTypo = styled(Typography)({
  fontWeight: 200,
  opacity: 0.7,
  letterSpacing: 1,
});

const ThickTypo = styled(Typography)({
  fontWeight: 900,
  letterSpacing: 3,
});

const FormButton = styled(Button)({
  color: "white",
  fontStyle: "bold",
});
