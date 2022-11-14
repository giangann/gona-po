import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { DEFAULT_ACTIVE_TAB_ABOUT } from "~/constants/constants";
import { AboutHeader } from "./AboutHeader";
import { ListAlbumImage } from "./ListAlbumImage";
import { News } from "./News";
import { motion } from "framer-motion";
import "../../index.css";

export const About = () => {
  const tabElement = [
    {
      id: 0,
      title: "Giới thiệu",
      element: <></>,
      isActive: false,
    },
    {
      id: 1,
      title: "Bản tin",
      element: <News />,
      isActive: true,
    },
    {
      id: 2,
      title: "Album ảnh",
      element: <ListAlbumImage />,
      isActive: false,
    },
  ];

  const [activeTabId, setActiveTabId] = useState<number | null>(null);

  const handleToggleTab = (id: number | string) => {
    setActiveTabId(id as number);
    localStorage.setItem("tab-index", id.toString());
  };

  useEffect(() => {
    const activeTabId = parseInt(
      localStorage.getItem("tab-index") || DEFAULT_ACTIVE_TAB_ABOUT
    );
    setActiveTabId(activeTabId);
  }, []);
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0.5, backgroundColor: "black", width: 0 }}
      animate={{ opacity: 1, backgroundColor: "black", width: "unset" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box p={1} sx={{ backgroundColor: "black" }}>
        <AboutHeader
          tabElement={tabElement}
          handleToggleTab={handleToggleTab}
          activeTabId={activeTabId}
        />

        {tabElement.map((item: any) =>
          item.id === activeTabId ? item.element : undefined
        )}
      </Box>
    </motion.div>
  );
};
