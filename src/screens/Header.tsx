import { Box, Container, IconButton } from "@mui/material";
import { useState } from "react";
import { CustomDrawer } from "~/components/Drawer/CustomDrawer";
import { ListInsideDrawer } from "~/components/Drawer/ListInsideDrawer";
import { IcSharpDensityMedium } from "~/components/Icons";
import { CustomLink, HeaderLogoText } from "~/styles/styled/styled";

type HeaderProps = {
  position: string;
};
export const Header = (props: HeaderProps) => {
  const { position } = props;
  const [openHeaderDrawer, setOpenHeaderDrawer] = useState(false);
  const handleCloseDrawer = () => {
    console.log("close drwawer");
    setOpenHeaderDrawer(false);
  };
  return (
    <Box sx={{ position: { position }, top: 0, zIndex: 3, width: "100%" }}>
      <Container>
        <Box p={{ xs: 2, sm: 5 }}>
          <CustomLink to="/">
            <HeaderLogoText>GonaPo</HeaderLogoText>
          </CustomLink>
        </Box>
      </Container>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "28%", sm: "38%" },
          right: "3vw",
        }}
      >
        <IconButton
          onClick={() => setOpenHeaderDrawer(true)}
          sx={{ color: "white", p: 0 }}
        >
          <IcSharpDensityMedium fontSize={{ xs: 24, sm: 30 } as any} />
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
