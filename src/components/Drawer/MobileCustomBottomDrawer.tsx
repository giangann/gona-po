import { Box, Drawer } from "@mui/material";
import React from "react";
import { backgroundColor } from "~/styles/colors";
interface PropsType {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
export const MobileCustomBottomDrawer: React.FC<PropsType> = ({
  children,
  open,
  handleClose,
}) => {
  return (
    <React.Fragment>
      <Drawer anchor="bottom" open={open} onClose={handleClose}>
        <Box
          sx={{
            height: { xs: "50vh" },
            backgroundColor: backgroundColor["primary"],
            borderTop: "1px solid white",
          }}
        >
          {children}
        </Box>
      </Drawer>
    </React.Fragment>
  );
};
