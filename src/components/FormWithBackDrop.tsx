import { Button, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React from "react";

export const FormWithBackDrop = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Button onClick={handleToggle}>Toggle backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Typography>This is backdrop</Typography>
      </Backdrop>
    </React.Fragment>
  );
};
