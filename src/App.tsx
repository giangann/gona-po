import Hello from "~/components/Hello";
import { FormWithBackDrop } from "./components/FormWithBackDrop";
import { ImageSlideItem } from "./components/ImageSlideItem";

function App() {
  return;
  <>
    <FormWithBackDrop />
    {[1, 2, 3].map((item, index) => (
      <ImageSlideItem key={index} />
    ))}
  </>;
}

export default App;
