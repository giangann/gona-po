import { Route, Routes } from "react-router-dom";
import { About } from "./screens/About/About";
import { Home } from "./screens/Home";
import { Layout } from "./screens/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/slide" element={<SlideFullPage />} /> */}
        <Route path="/about" element={<About />} />
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
