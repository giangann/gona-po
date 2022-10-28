import { Box } from "@mui/material";
import { useState } from "react";
import { AboutHeader } from "./AboutHeader";
import { AlbumImage } from "./AlbumImage";
import { News } from "./News";

export const About = () => {
  const [newsTab, setNewsTab] = useState(true);
  // const []
  return (
    <Box p={1} sx={{ backgroundColor: "black" }}>
      <AboutHeader />
      <News />
      <AlbumImage />
    </Box>
  );
};
