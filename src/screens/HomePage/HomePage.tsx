import { AllTrips } from "../Trips/AllTrips";
import { AboutMe } from "./AboutMe";
import { Blog } from "./Blog";

export const HomePage = () => {
  return (
    <>
      <AllTrips />
      <AboutMe />
      <Blog />
    </>
  );
};
