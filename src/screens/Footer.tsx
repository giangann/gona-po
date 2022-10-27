import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
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

export const Footer = () => {
  const gridFull = { xs: 12 };
  const grid = { xs: 12, sm: 4 };
  return (
    <Box
      sx={{
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
                <ThickTypo>Đăng kí để nhận tour mới nhất</ThickTypo>
              </Grid>
              <Grid item {...gridFull}>
                <CustomizedTextField
                  label="Tên của bạn"
                  placeholder="Tên của bạn"
                />
              </Grid>
              <Grid item {...gridFull}>
                <CustomizedTextField
                  label="Địa chỉ email"
                  placeholder="Địa chỉ email"
                />
              </Grid>
              <Grid item {...gridFull}>
                <WhiteOutlinedButton
                  sx={{ height: 56 }}
                  fullWidth
                  variant="outlined"
                >
                  <WhiteTypo>Đăng ký</WhiteTypo>
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
                <ThickTypo>Theo dõi tại</ThickTypo>
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
                {MENU_FOOTER.map((item, index) => (
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
