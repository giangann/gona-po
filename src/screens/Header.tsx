import { AppBar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { IcSharpDensityMedium } from "~/components/Icons";
import { HeaderLogoText } from "~/styles/styled/styled";

export const Header = () => {
  return (
    <Box sx={{ position: "relative" }} width="100%">
      <Container>
        <Box p={5}>
          <HeaderLogoText>GonaPo</HeaderLogoText>
        </Box>
      </Container>
      <Box sx={{ position: "absolute", top: "40%", right: "3vw" }}>
        <IcSharpDensityMedium fontSize={30} />
      </Box>
    </Box>
  );
};
