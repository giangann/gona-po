import { Button } from "@mui/material";
import React from "react";

type CustomizedButtonProps = {
  content?: string;
  children: React.ReactNode;
};
export const CustomizedButton = (props: CustomizedButtonProps) => {
  const { children } = props;

  return (
    <Button
      sx={{
        "& .css-xsqe0f-MuiButtonBase-root-MuiButton-root": {
          border: "1px solid white !important",
        },
        "& .css-xsqe0f-MuiButtonBase-root-MuiButton-root:hover": {
          border: "1px solid white !important",
        },
      }}
    >
      {children}
    </Button>
  );
};
