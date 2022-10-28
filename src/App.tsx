import { Route, Routes } from "react-router-dom";
import { About } from "./screens/About/About";
import { AlbumImage } from "./screens/About/AlbumImage";
import { Home } from "./screens/Home";
import { Layout } from "./screens/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/about/album/:id" element={<AlbumImage/>}/>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
