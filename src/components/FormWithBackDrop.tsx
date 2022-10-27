import { Box, Button, Hidden, Typography } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { displayBackdropAtom } from "~/libs/atom/slideAtom";
import { Header } from "~/screens/Header";
import { CustomForm } from "./Form/CustomForm";
import { IndicatorGroup } from "./IndicatorGroup";
export const FormWithBackDrop = () => {
  const [isShowBackdrop, setIsShowBackdrop] = useAtom(displayBackdropAtom);
  console.log("isShowBackdrop", isShowBackdrop);
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer - 5,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      open={isShowBackdrop}
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
