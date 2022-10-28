import { Box } from "@mui/material";
import { ImageSlideItem } from "~/components/ImageSlideItem";
import { imageBanner, imageSlideHomePage } from "~/constants/images";
import "../index.css";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { CustomForm } from "../components/Form/CustomForm";
import { IndicatorGroup } from "~/components/IndicatorGroup";
export const Home = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            height: "100%",
            width: "100vw",
            backgroundColor: "black",
            opacity: 0.3,
          }}
        />
        <Box sx={{ position: "absolute", height: "100%", width: "100vw" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              height: "100vh",
              top: 0,
              left: 0,
            }}
          >
            <Box
              className="indicator"
              sx={{
                position: "absolute",
                top: "45vh",
                right: "3vw",
              }}
            >
              <IndicatorGroup />
            </Box>
            <CustomForm />
          </Box>{" "}
        </Box>
        {imageSlideHomePage.map((item, index: any) => (
          <ImageSlideItem key={index} image={item} />
        ))}
      </Box>
    </Box>
  );
};
