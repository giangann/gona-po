import { Box, Button, Hidden, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React from "react";
import { Header } from "~/screens/Header";
import { CustomForm } from "./CustomForm";
import { IndicatorGroup } from "./IndicatorGroup";
export const FormWithBackDrop = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer - 5,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      open={open}
      // onClick={handleClose}
    >
      <Header />
      <CustomForm />
      <Box p={6} />
      <Hidden smDown>
        <Box sx={{ position: "absolute", top: "46vh", right: "3vw" }}>
          <IndicatorGroup />
        </Box>
      </Hidden>
    </Backdrop>
  );
};
