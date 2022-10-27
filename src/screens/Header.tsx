import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CustomDrawer } from "~/components/Drawer/CustomDrawer";
import { ListInsideDrawer } from "~/components/Drawer/ListInsideDrawer";
import { IcSharpDensityMedium } from "~/components/Icons";
import { HeaderLogoText } from "~/styles/styled/styled";

export const Header = () => {
  const [openHeaderDrawer, setOpenHeaderDrawer] = useState(false);
  const handleCloseDrawer = () => {
    setOpenHeaderDrawer(false);
  };
  return (
    <Box sx={{ position: "fixed", top: 0, zIndex: 100 }} width="100%">
      <Container>
        <Box p={5}>
          <HeaderLogoText>GonaPo</HeaderLogoText>
        </Box>
      </Container>
      <Box sx={{ position: "absolute", top: "38%", right: "3vw" }}>
        <IconButton
          onClick={() => setOpenHeaderDrawer(true)}
          sx={{ color: "white", p: 0 }}
        >
          <IcSharpDensityMedium fontSize={30} />
        </IconButton>
      </Box>

      <CustomDrawer
        open={openHeaderDrawer}
        handleClose={() => setOpenHeaderDrawer(false)}
      >
        <ListInsideDrawer handleCloseDrawer={handleCloseDrawer} />
      </CustomDrawer>
    </Box>
  );
};
