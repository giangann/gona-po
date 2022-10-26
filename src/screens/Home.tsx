import { FormWithBackDrop } from "~/components/FormWithBackDrop";
import { ImageSlideItem } from "~/components/ImageSlideItem";
import { imageSlideHomePage } from "~/constants/images";
import "../index.css";
import { Header } from "./Header";

export const Home = () => {
  const handleInView = (ref: any) => {
    console.log(ref);
  };

  return (
    <>
      <FormWithBackDrop />
      {imageSlideHomePage.map((item, index) => (
        <ImageSlideItem key={index} image={item} />
      ))}
    </>
  );
};
