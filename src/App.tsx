import { Route, Routes } from "react-router-dom";
import { About } from "./screens/About/About";
import { AlbumImage } from "./screens/About/AlbumImage";
import { Home } from "./screens/Home";
import { Layout } from "./screens/Layout";
import { TestAnimation } from "./screens/TestAnimation";
import { AllTrips } from "./screens/Trips/AllTrips";
import { TripDetail } from "./screens/Trips/TripDetail";

function App() {
  return (
    <Routes>
      <Route path="/test-animation" element={<TestAnimation />} />
      <Route path="/" element={<Layout />}>
        <Route path="/about" element={<About />} />
        <Route path="/about/album/:id" element={<AlbumImage />} />
        <Route path="/" element={<Home />}>
          <Route index element={<AllTrips />} />
          <Route path="/trip/:slug" element={<TripDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
