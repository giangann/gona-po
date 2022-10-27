import { TripInformationCardProps } from "./TripInformationCard";
import { Box, Stack } from "@mui/material";
import { ThickTypo } from "~/styles/styled/styled";

export const CarouselItem = (
  props: TripInformationCardProps & { index: string | number }
) => {
  const { title, date, image } = props;

  return (
    <Box
        component="img"
        src={image}
        sx={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
    // <Stack spacing={2}>
      
    //   <Stack>
    //     <ThickTypo>{title}</ThickTypo>
    //     <ThickTypo>{date}</ThickTypo>
    //   </Stack>
    // </Stack>
  );
};
