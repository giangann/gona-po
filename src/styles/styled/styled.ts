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

export const BannerTitleText = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: 900,
  fontSize: 60,
  letterSpacing: 2,
  color: "white",

  [theme.breakpoints.down("sm")]: {
    fontSize: 48,
  },
}));

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

export const BoxLayer = styled(Box)({
  position: "absolute",
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  top: 0,
});

export const BoxCenter = styled(Box)({
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
});

export const widthStyleResponsive = {
  width: {
    xs: "80%",
    sm: "50%",
    md: "20%",
  },
};

export const fontSizeContentResponsive = {
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
  },
};
