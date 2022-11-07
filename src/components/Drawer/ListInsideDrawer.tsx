import { Box, Button, Hidden, IconButton, Stack } from "@mui/material";
import { allTripsData } from "~/constants/form";
import {
  HeaderLogoText,
  ToogleLanguageText,
  WhiteTypo,
} from "~/styles/styled/styled";
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

  const handleToogleLanguage = () => {
    console.log("toogle language");
  };

  const carouselItems = allTripsData.map((item, index) => (
    <CarouselItem
      slug={item.slug}
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
    900: { items: 4 },
  };

  return (
    <Stack>
      <Box sx={{ position: "relative" }}>
        <Box p={2}>
          <HeaderLogoText sx={{ color: "white" }}>GonaPo</HeaderLogoText>
        </Box>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            position: "absolute",
            top: { xs: "5.5%", sm: "8%" },
            right: "3vw",
          }}
        >
          <IconButton
            onClick={handleToogleLanguage}
            sx={{ color: "white", p: 0 }}
          >
            <ToogleLanguageText>VI</ToogleLanguageText>
          </IconButton>
          <IconButton onClick={handleCloseDrawer} sx={{ color: "white", p: 0 }}>
            <IcTwotoneClose fontSize={30} />
          </IconButton>
        </Stack>

        {/* For Desktop */}
        <Hidden smDown>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={4}
            sx={{ mb: 1 }}
          >
            <Button onClick={() => navigate("about")}>
              <WhiteTypo>Về mình </WhiteTypo>
            </Button>
            <Button onClick={() => navigate("contact")}>
              <WhiteTypo>Blog</WhiteTypo>
            </Button>
            <Button onClick={() => navigate("contact")}>
              <WhiteTypo>Album</WhiteTypo>
            </Button>
            <Button onClick={() => navigate("contact")}>
              <WhiteTypo>Liên hệ</WhiteTypo>
            </Button>
          </Stack>
          <Box
            sx={{ margin: "auto", position: "relative" }}
            width="60vw"
            height="30vh"
          >
            <Box
              sx={{
                px: { xs: 0, sm: 3 },
                border: "1px solid white",
                height: "100%",
                borderRadius: 8,
              }}
            >
              <AliceCarousel
                mouseTracking
                autoHeight
                disableDotsControls
                autoPlayInterval={1000}
                responsive={responsive}
                items={carouselItems}
              />
            </Box>
          </Box>
        </Hidden>

        {/* For Mobile */}
        <Hidden smUp>
          <Box sx={{ margin: "auto" }} width="60vw" height="38vh">
            <AliceCarousel
              mouseTracking
              autoHeight
              autoPlayInterval={1000}
              responsive={responsive}
              items={carouselItems}
            />
          </Box>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mt: 6 }}
          >
            <Button onClick={() => navigate("about")}>
              <WhiteTypo>Về mình </WhiteTypo>
            </Button>
            <Button onClick={() => navigate("contact")}>
              <WhiteTypo>Blog</WhiteTypo>
            </Button>
            <Button onClick={() => navigate("contact")}>
              <WhiteTypo>Album</WhiteTypo>
            </Button>
            <Button onClick={() => navigate("contact")}>
              <WhiteTypo>Liên hệ</WhiteTypo>
            </Button>
          </Stack>
        </Hidden>
      </Box>
    </Stack>
  );
};
