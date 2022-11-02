import { Box, Button, Hidden, IconButton, Stack } from "@mui/material";
import { allTripsData } from "~/constants/form";
import { HeaderLogoText, WhiteTypo } from "~/styles/styled/styled";
import { IcTwotoneClose } from "../Icons";
import { CarouselItem } from "./CarouselItem";
import { TripInformationCard } from "./TripInformationCard";
import AliceCarousel from "react-alice-carousel";
import "../../index.css";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate } from "react-router";

type ListInsideDrawerProps = {
  handleCloseDrawer?: () => void;
};
export const ListInsideDrawer = (props: ListInsideDrawerProps) => {
  const { handleCloseDrawer } = props;
  const navigate = useNavigate();

  const carouselItems = allTripsData.map((item, index) => (
    <CarouselItem
      image={item.image}
      key={index}
      index={index}
      title={item.description}
      date={item.date}
    />
  ));
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    900: { items: 2 },
  };

  return (
    <Stack>
      <Box sx={{ position: "relative" }}>
        <Box p={2}>
          <HeaderLogoText sx={{ color: "white" }}>GonaPo</HeaderLogoText>
        </Box>
        <Box sx={{ position: "absolute", top: "38%", right: "3vw" }}>
          <IconButton onClick={handleCloseDrawer} sx={{ color: "white", p: 0 }}>
            <IcTwotoneClose fontSize={30} />
          </IconButton>
        </Box>

        {/* For desktop */}
        <Hidden smDown>
          <Stack direction="row" justifyContent="center" spacing={10}>
            <Button onClick={() => navigate("about")}>
              <WhiteTypo>About</WhiteTypo>
            </Button>
            <Button onClick={() => navigate("contact")}>
              <WhiteTypo>Contact</WhiteTypo>
            </Button>
          </Stack>

          <Stack
            direction="row"
            justifyContent="center"
            sx={{
              border: "1px solid white",
              width: "60%",
              margin: "30px auto",
            }}
          >
            {allTripsData.map((item) => (
              <TripInformationCard
                title={item.title}
                date={item.date}
                image={item.image}
              />
            ))}
          </Stack>
        </Hidden>

        {/* For mobile */}
        <Hidden smUp>
          <Box sx={{ margin: "auto" }} width="60vw" height="40vh">
            <AliceCarousel
              // infinite
              mouseTracking
              autoHeight
              // autoWidth
              autoPlayInterval={1000}
              // animationDuration={1500}
              // disableDotsControls
              // controlsStrategy="alternate"
              responsive={responsive}
              items={carouselItems}
            />
          </Box>
        </Hidden>
      </Box>
    </Stack>
  );
};
