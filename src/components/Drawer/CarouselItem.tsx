import { TripInformationCardProps } from "./TripInformationCard";
import { Box, Stack } from "@mui/material";
import { CustomLink, ThickTypo } from "~/styles/styled/styled";

export const CarouselItem = (
  props: TripInformationCardProps & { index: string | number; slug: string }
) => {
  const { title, date, image, slug } = props;

  return (
    <Box
      sx={{
        py: { xs: "unset", sm: 0 },
        px: { xs: 0, sm: 2 },
        height: "100% !important",
      }}
    >
      <CustomLink to={`trip/${slug}`}>
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={image}
            sx={{
              borderRadius: 2,
              margin: "12px auto",
              width: "auto",
              height: "150px",
              objectFit: "cover",
            }}
          />
        </Box>

        <ThickTypo sx={{ mb: 1, textAlign: "center" }}>{title}</ThickTypo>
        <ThickTypo
          sx={{
            opacity: 0.7,
            fontWeight: 300,
            textAlign: "center",
            fontSize: { xs: 13, sm: 15 },
          }}
        >
          {date}
        </ThickTypo>
      </CustomLink>
    </Box>
  );
};
