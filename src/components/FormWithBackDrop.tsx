import { Box, Button, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React from "react";
import { Header } from "~/screens/Header";
import { CustomForm } from "./CustomForm";
export const FormWithBackDrop = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Button onClick={handleToggle}>Toggle backdrop</Button>
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
        <Box p={3} />
      </Backdrop>
    </Box>
  );
};
