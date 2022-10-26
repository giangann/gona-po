import { Button, styled, Typography } from "@mui/material";

export const HeaderLogoText = styled(Typography)({
  fontWeight: 900,
  letterSpacing: 5,
  fontSize: 40,
  margin: 0,
  textAlign: "center",
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
