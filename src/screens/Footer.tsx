import { Box, Container, Grid, IconButton, Stack, styled } from "@mui/material";
import { CustomizedTextField } from "~/components/CustomInput";
import {
  BrandicoTwitter,
  IcBaselineFacebook,
  MdiYoutube,
  PhInstagramLogoFill,
} from "~/components/Icons";
import { MENU_FOOTER } from "~/constants/footer";
import {
  CustomLink,
  ThickTypo,
  WhiteOutlinedButton,
  WhiteTypo,
} from "~/styles/styled/styled";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const gridFull = { xs: 12 };
  const grid = { xs: 12, sm: 4 };

  const { t } = useTranslation();
  return (
    <Box
      className="footer"
      sx={{
        // can't understand why need relative :(
        position: "relative",
        zIndex: 2,
        backgroundColor: "black",
        py: 5,
      }}
    >
      <Box
        sx={{
          borderTop: "1px solid white",
        }}
      >
        <Container>
          <Grid container py={4} spacing={4}>
            <Grid item {...grid} container rowSpacing={2}>
              <Grid item {...gridFull}>
                <ThickTypo>{t("home.form.form_title_footer")}</ThickTypo>
              </Grid>
              <Grid item {...gridFull}>
                <CustomizedTextField
                  label={t("home.form.your_name")}
                  placeholder={t("home.form.your_name")}
                />
              </Grid>
              <Grid item {...gridFull}>
                <CustomizedTextField
                  label={t("home.form.email")}
                  placeholder={t("home.form.email")}
                />
              </Grid>
              <Grid item {...gridFull}>
                <WhiteOutlinedButton
                  sx={{ height: 56 }}
                  fullWidth
                  variant="outlined"
                >
                  <WhiteTypo>{t("home.form.register")}</WhiteTypo>
                </WhiteOutlinedButton>
              </Grid>
            </Grid>
            <Grid
              item
              {...grid}
              sx={{
                display: { xs: "unset", sm: "flex" },
                justifyContent: "center",
              }}
            >
              <Stack spacing={1}>
                <ThickTypo>{t('footer.follow_us')}</ThickTypo>
                <Stack spacing={1} direction="row">
                  <CustomIconButton>
                    <IcBaselineFacebook fontSize={30} />
                  </CustomIconButton>
                  <CustomIconButton>
                    <MdiYoutube fontSize={30} />
                  </CustomIconButton>
                  <CustomIconButton>
                    <PhInstagramLogoFill fontSize={30} />
                  </CustomIconButton>
                  <CustomIconButton>
                    <BrandicoTwitter fontSize={30} />
                  </CustomIconButton>
                </Stack>
              </Stack>
            </Grid>
            <Grid item {...grid}>
              <Stack spacing={1}>
                {MENU_FOOTER.map((item) => (
                  <CustomLink to={item.link}>
                    <WhiteTypo sx={{ textTransform: "uppercase" }}>
                      {item.title}
                    </WhiteTypo>
                  </CustomLink>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

const CustomIconButton = styled(IconButton)({
  padding: 0,
});
