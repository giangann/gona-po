import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Layout } from "./screens/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/slide" element={<SlideFullPage />} /> */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
