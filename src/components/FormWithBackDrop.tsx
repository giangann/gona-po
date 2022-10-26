import { Button, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import React from "react";
import { CustomForm } from "./CustomForm";
import AcUnitIcon from '@mui/icons-material/AcUnit';
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
      <AcUnitIcon/>
      <Button onClick={handleToggle}>Toggle backdrop</Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CustomForm />
      </Backdrop>
    </React.Fragment>
  );
};
