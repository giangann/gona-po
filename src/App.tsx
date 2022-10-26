import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { SlideFullPage } from "./screens/SlideFullPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/slide" element={<SlideFullPage />} />
    </Routes>
  );
}

export default App;
