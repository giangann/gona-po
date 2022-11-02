import { TripInformationCardProps } from "./TripInformationCard";
import { Box, Stack } from "@mui/material";
import { ThickTypo } from "~/styles/styled/styled";

export const CarouselItem = (
  props: TripInformationCardProps & { index: string | number }
) => {
  const { title, date, image } = props;

  return (
    <Stack spacing={2}>
      <Box
        component="img"
        src={image}
        sx={{
          borderRadius: 2,
          margin: "auto",
          width: "auto",
          height: "150px",
          objectFit: "cover",
        }}
      />

      <Stack alignItems="center">
        <ThickTypo sx={{textAlign:'center'}}>{title}</ThickTypo>
        <ThickTypo>{date}</ThickTypo>
      </Stack>
    </Stack>
  );
};
