import "../index.css";
import { Banner } from "./Banner";
import { Header } from "./Header";
import { Outlet } from "react-router";
export const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Outlet />
    </>
  );
};
