import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderLogoText = styled(Typography)({
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: 32,
  margin: 0,
  textAlign: "center",
  fontStyle: "italic",
  color: "white",
});

export const BannerTitleText = styled(Typography)({
  fontWeight: 900,
  fontSize: 48,
  letterSpacing: 2,
});

export const ThinTypo = styled(Typography)({
  fontWeight: 200,
  opacity: 0.7,
  letterSpacing: 1,
  color: "white",
});

export const ThickTypo = styled(Typography)({
  fontWeight: 900,
  letterSpacing: 3,
  color: "white",
});

export const FormButton = styled(Button)({
  color: "white",
  fontStyle: "bold",
});

export const WhiteTypo = styled(Typography)({
  color: "white",
});

export const CustomLink = styled(Link)({
  textDecoration: "none",
});

export const WhiteOutlinedButton = styled(Button)({
  fontWeight: 400,
  // backgroundColor: '#ffffff',
  border: "1px solid white !important",
  textTransform: "capitalize",
  textDecorationColor: "white",
  height: "100%",
  color: "white",
});

export const BoxForRef = styled(Box)({
  position: "absolute",
  top: "50vh",
  right: "2vw",
});
