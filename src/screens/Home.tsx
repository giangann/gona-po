import { FormWithBackDrop } from "~/components/FormWithBackDrop";
import { ImageSlideItem } from "~/components/ImageSlideItem";
import { imageSlideHomePage } from "~/constants/images";
import "../index.css";
import { Header } from "./Header";
import { SlideFullPage } from "./SlideFullPage";

export const Home = () => {
  return (
    <>
      <Header />
      <FormWithBackDrop />
      <SlideFullPage />
    </>
  );
};
