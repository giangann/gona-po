import { Route, Routes, useLocation } from "react-router-dom";
import { About } from "./screens/About/About";
import { AlbumImage } from "./screens/About/AlbumImage";
import { Home } from "./screens/Home";
import { HomePage } from "./screens/HomePage/HomePage";
import { Layout } from "./screens/Layout";
import { TripDetail } from "./screens/Trips/TripDetail";
import { AnimatePresence } from "framer-motion";
import { createTheme, ThemeProvider } from "@mui/material";
import { TestStickyHeader } from "./screens/TestStickyHeader";
import { BlogDetail } from "./screens/Blog/BlogDetail";

function App() {
  const location = useLocation();
  const theme = createTheme({
    typography: {
      fontFamily: "BuiltTitlingSbFont",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/sticky" element={<TestStickyHeader />} />
          <Route path="/" element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/about/album/:id" element={<AlbumImage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/" element={<Home />}>
              <Route index element={<HomePage />} />
              <Route path="/trip/:slug" element={<TripDetail />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
