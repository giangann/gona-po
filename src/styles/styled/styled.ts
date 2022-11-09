import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderLogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  letterSpacing: 1,
  fontSize: 48,
  margin: 0,
  textAlign: "center",
  // fontStyle: "italic",
  color: "white",

  [theme.breakpoints.down("sm")]: {
    fontSize: 30,
  },
}));

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

export const BlogTitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: 48,
  letterSpacing: 2,
  color: "white",
  textAlign: "center",

  [theme.breakpoints.down("sm")]: {
    fontSize: 32,
  },
}));
export const DescriptionTitleText = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  fontSize: 32,
  color: "white",
  textTransform: "uppercase",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));

export const PriceBannerText = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 32,
  color: "white",
  textTransform: "uppercase",
  textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    fontSize: 24,
  },
}));

export const priceBannerStyle = {
  fontWeight: 600,
  color: "white",
  textTransform: "uppercase",
  textAlign: "left",
  fontSize: { xs: 24, sm: 32 },
};

export const ThinTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 200,
  opacity: 0.7,
  letterSpacing: 1,
  color: "white",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const ThickTypo = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  letterSpacing: 3,
  color: "white",
  [theme.breakpoints.down("sm")]: {
    fontSize: 14,
  },
}));

export const ImageTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 900,
  color: "white",
  fontSize: 32,
  textAlign: "left",
  letterSpacing: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: 18,
  },
}));

export const thickTypoStyles = {
  fontWeight: 900,
  letterSpacing: 3,
  color: "white",
  fontSize: { xs: 14, sm: "unset" },
};

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

export const WhiteFilledButton = styled(Button)({
  fontWeight: 400,
  border: "1px solid white !important",
  textTransform: "capitalize",
  textDecorationColor: "white",
  height: "100%",
  color: "black",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },
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

// @ts-ignore
export const ToogleLanguageText = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 200,
  color: "white",
  opacity: 0.7
}));

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
