import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
export const TestAnimation = () => {
  return (
    <>
      <Box
        sx={{ position: "sticky", top: 0, zIndex: -300, height: "100vh" }}
        component="img"
        src="https://eqx-assets-prod.imgix.net/files/4cc6dd7c8e024a50a3c92bcad02e276d-victor-xok-jxmmltiqpk8-unsplash.jpg?auto=format&fit=crop&ixlib=react-8.6.4&w=1946"
      />
      <Box sx={{ position: "relative", top: -50 }}>
        <a href="#scroll">Scroll to</a>
      </Box>
      {/* <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{ type: "spring", stiffness: 100, delay: 1, duration: 10 }}
      > */}
      <Box
        id="scroll"
        className="yellow"
        sx={{ backgroundColor: "red", width: "80vw", height: "100vh" }}
      />
      <Box
        className="yellow"
        sx={{ backgroundColor: "yellow", width: "80vw", height: "300vh" }}
      />
      {/* </motion.div> */}
    </>
  );
};
