import { FormWithBackDrop } from "~/components/FormWithBackDrop";
import { ImageSlideItem } from "~/components/ImageSlideItem";
import { imageSlideHomePage } from "~/constants/images";
import "../index.css";
import { Header } from "./Header";
import { useInView } from "react-intersection-observer";

import { SlideFullPage } from "./SlideFullPage";
import { Box } from "@mui/material";

export const Home = () => {
  const handleInView = (ref: any) => {
    console.log(ref);
  };
  const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();

  console.log('magicSectionIsVisible ',magicSectionIsVisible)
  return (
    <>
      <Header />
      <FormWithBackDrop />
      <Box>
        <h2 ref={magicSectionRef}>Magic 🪄</h2>
      </Box>
      {magicSectionIsVisible ? handleInView(magicSectionRef) : <Box />}
      {imageSlideHomePage.map((item, index) => (
        <ImageSlideItem key={index} imageLink={item.link} />
      ))}
      {/* <SlideFullPage /> */}
    </>
  );
};
