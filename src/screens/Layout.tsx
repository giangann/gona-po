import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Outlet />
      <Footer />
    </Box>
  );
};
