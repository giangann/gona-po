import "../index.css";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { Outlet } from "react-router";
import { ImageTopLayer } from "./ImageTopLayer";
export const Home = () => {
  return (
    <>
      <Header position="fixed" />
      <ImageTopLayer/>
      <Banner />
      <Outlet />
    </>
  );
};
