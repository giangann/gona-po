import { Box, Drawer } from "@mui/material";
import React from "react";
import { backgroundColor } from "~/styles/colors";

interface PropsType {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}

export const CustomDrawer: React.FC<PropsType> = ({
  children,
  open,
  handleClose,
}) => {
  return (
    <React.Fragment>
      <Drawer anchor="top" open={open} onClose={handleClose}>
        <Box
          // role="presentation"
          sx={{
            height: { xs: "62vh", sm: "50vh" },
            backgroundColor: backgroundColor["primary"],
            borderBottom: "1px solid white",
          }}
        >
          {children}
        </Box>
      </Drawer>
    </React.Fragment>
  );
};
