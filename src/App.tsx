import Hello from "~/components/Hello";
import { FormWithBackDrop } from "./components/FormWithBackDrop";
import { ImageSlideItem } from "./components/ImageSlideItem";
import { imageSlideHomePage } from "./constants/images";

function App() {
  return (
    <>
      <FormWithBackDrop />
      {imageSlideHomePage.map((item, index) => (
        <ImageSlideItem key={index} imageLink={item} />
      ))}
    </>
  );
}

export default App;
