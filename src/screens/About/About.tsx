import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { DEFAULT_ACTIVE_TAB_ABOUT } from "~/constants/constants";
import { AboutHeader } from "./AboutHeader";
import { AlbumImage } from "./AlbumImage";
import { News } from "./News";

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
      element: <AlbumImage />,
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
    <Box p={1} sx={{ backgroundColor: "black" }}>
      <AboutHeader tabElement={tabElement} handleToggleTab={handleToggleTab} activeTabId={activeTabId} />
      {tabElement.map((item: any, index: any) =>
        item.id === activeTabId ? item.element : undefined
      )}
    </Box>
  );
};
