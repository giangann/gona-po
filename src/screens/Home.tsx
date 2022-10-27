import { Box } from "@mui/material";
import { FormWithBackDrop } from "~/components/FormWithBackDrop";
import { ImageSlideItem } from "~/components/ImageSlideItem";
import { imageBanner, imageSlideHomePage } from "~/constants/images";
import "../index.css";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { CustomForm } from "../components/Form/CustomForm";
import { backgroundColor } from "~/styles/colors";
export const Home = () => {
  const handleInView = (ref: any) => {
    console.log(ref);
  };

  return (
    // <Box>
    //   {/* <Box
    //     sx={{
    //       position: "static",
    //       top: 0,
    //     }}
    //   >
    //     <Banner />
    //   </Box> */}

    // </Box>
    <Box sx={{ position: "relative", backgroundColor: "black" }}>
      {/* <div className="overlay">
        <CustomForm />
      </div> */}
      <FormWithBackDrop />
      <Banner />
      {imageSlideHomePage.map((item, index: any) => (
        <ImageSlideItem key={index} image={item} />
      ))} 
    </Box>
  );
};
